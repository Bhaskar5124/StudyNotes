import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// 1. Connection
mongoose.connect('mongodb://localhost:27017/ultimate_indexing_db')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

// 2. The Multi-Purpose Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: Number }, // We'll test Single & Unique Index here
    email: { type: String },
    section: { type: String }, // For Compound Index
    grade: { type: Number },   // For Compound Index
    bio: { type: String },     // For Text Index
    createdAt: { type: Date, default: Date.now } // For TTL Index
});

/** * TEACHING STEPS: Uncomment these one by one to show the difference 
 */

//--------------------------------------------------------------------------------
// STEP 1: Single Field Index (Fast Search)
// studentSchema.index({ rollNo: 1 });

// What it is: 
// The most basic index. It takes one field (rollNo) and sorts it in a separate hidden list. The 1 means Ascending (1, 2, 3...) and -1 would mean Descending.

// The Logic: 
// Without this, if you search for Roll No. 999, MongoDB does a Collection Scan (COLLSCAN), looking at every document from the start. With this, it does an Index Scan (IXSCAN), jumping straight to the value.

// Best for: 
// Primary search fields like IDs, Roll Numbers, or Emails.
//--------------------------------------------------------------------------------


// STEP 2: Unique Index (Security + Speed)
// studentSchema.index({ rollNo: 1 }, { unique: true });

// What it is: This is Step 1 plus a Security Guard.

// The Logic: It creates a fast index for searching, but it also monitors every insert or update. If someone tries to add a Roll No. that already exists, MongoDB throws an E11000 error and stops the operation.

// Best for: Fields that must be one-of-a-kind, like email, username, or government_id
//--------------------------------------------------------------------------------


// STEP 3: Compound Index (Multi-filter: Section + Grade)
// studentSchema.index({ section: 1, grade: -1 });

// What it is: An index that covers multiple fields at once.

// The Logic: Imagine searching for a student in "Section A" with "Grade 10". If you have separate indexes, MongoDB has to do double work. A compound index creates a combined "map" (e.g., "A-10", "A-09", "B-10").

// The ESR Rule: Remind students that the order matters. Put fields you filter by "Equality" (section = 'A') before fields you "Sort" or "Range" (grade > 5).

// Best for: Complex filters, like an e-commerce site filtering by "Brand" + "Size" + "Color".
//--------------------------------------------------------------------------------


// STEP 4: Text Index (Search Engine functionality)
// studentSchema.index({ name: "text", bio: "text" });

// What it is: A specialized index for searching words inside long strings.

// The Logic: Normal indexes look for the entire string. If a bio says "Bhaskar loves coding," a normal index won't find it if you search for "coding." A Text Index breaks the sentences into "tokens" (individual words) so you can perform a keyword search.

// Limitation: You can only have one text index per collection, but it can cover multiple fields (as shown above).

// Best for: Search bars, blog post content, or user bios.
//--------------------------------------------------------------------------------


// STEP 5: TTL Index (Auto-delete after 60 seconds)
// studentSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

// What it is: An Auto-Delete timer.

// The Logic: MongoDB runs a background thread every minute. It looks at the createdAt timestamp, adds 60 seconds to it, and if that time has passed, it permanently deletes the document.

// Crucial Requirement: The field must be a Date object (Date.now or new Date()).

// Best for: OTPs (valid for 5 mins), temporary sessions, or logs that you don't want to store forever.
//--------------------------------------------------------------------------------


const Student = mongoose.model('Student', studentSchema);

// --- ROUTES FOR DEMONSTRATION ---

// A. SEEDING: Create 10,000 students
app.post('/seed', async (req, res) => {
    try {
        await Student.deleteMany({});
        const students = [];
        const sections = ['A', 'B', 'C', 'D'];
        for (let i = 1; i <= 10000; i++) {
            students.push({
                name: `Student ${i}`,
                rollNo: i,
                email: `student${i}@example.com`,
                section: sections[Math.floor(Math.random() * sections.length)],
                grade: Math.floor(Math.random() * 10) + 1,
                bio: i % 100 === 0 ? "He loves coding in Python and React" : "Regular student"
            });
        }
        await Student.insertMany(students);
        res.json({ message: "10,000 records seeded!" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// B. SEARCH: Test Single Field & Compound Index
app.get('/search', async (req, res) => {
    const { roll, section, grade } = req.query;
    let query = {};
    if (roll) query.rollNo = parseInt(roll);
    if (section && grade) {
        query.section = section;
        query.grade = parseInt(grade);
    }

    const explanation = await Student.find(query).explain("executionStats");
    res.json({
        strategy: explanation.queryPlanner.winningPlan.stage, // COLLSCAN or IXSCAN
        docsExamined: explanation.executionStats.totalDocsExamined,
        timeMS: explanation.executionStats.executionTimeMillis,
        resultsCount: explanation.executionStats.nReturned
    });
});

// C. FULL TEXT SEARCH: Test Text Index
app.get('/text-search', async (req, res) => {
    const { q } = req.query;
    const explanation = await Student.find({ $text: { $search: q } }).explain("executionStats");
    res.json({
        strategy: explanation.queryPlanner.winningPlan.stage,
        resultsFound: explanation.executionStats.nReturned,
        timeMS: explanation.executionStats.executionTimeMillis
    });
});

app.listen(8050, () => console.log("Server running on port 8050"));




//Indexing increases Read speed but decreases Write speed, so what to do?
// 1. The 80/20 Rule
// In most applications (like Instagram, Amazon, or a Blog), users Read data 90% of the time and Write data only 10% of the time.

// Because reading happens so much more often, we accept a tiny delay in writing to ensure the app feels "lightning fast" for the millions of people browsing.

// 2. Only Index what you "Query"
// You should never index every field. You only index fields that appear in your:

// .find() filters (e.g., email, username)

// .sort() requirements (e.g., createdAt)

// .populate() links (e.g., authorID)

// If you have a field like profileDescription that you never search by, do not index it. This keeps your "Write" speed high.

// 3. Background Indexing
// In MongoDB, if you have a massive collection and you add an index, it can lock the database. We use "Background Building" so the app stays online while the index is being created.

// 4. When would you actually "Delete" an index?
// You only delete an index in two specific scenarios:

// Redundancy: If you have an index on {name: 1, age: 1} and another one on just {name: 1}, the second one is redundant. Delete it to save space and write speed.

// Unused Indexes: If you check your database logs and see that an index hasn't been used in 3 months, delete it. It’s "dead weight" slowing down your writes.

// The "Write Speed" Hack for Big Data
// If you are doing a Bulk Import (e.g., uploading 1 million students at once):

// Drop the indexes.

// Import the 1 million records (it will be incredibly fast).

// Re-create the indexes once the import is finished.

// This is a common trick used by Data Engineers to get the best of both worlds!

// Summary for your Students:
// "An index is like a premium subscription. It’s not free—it costs Disk Space and Write Time. We only buy it for the fields that are 'VIPs' in our search queries."
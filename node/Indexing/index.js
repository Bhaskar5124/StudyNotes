import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());


// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/indexing_demo')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error", err));

// 2. Define the Schema
const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: Number, // We will index this later
    email: String
});

// // ✅ THIS IS THE INDEXING LINE
// // To show the difference, start with this commented out, then uncomment it later!
studentSchema.index({ rollNo: 1 }); 

const Student = mongoose.model('Student', studentSchema);

// 3. Seed Route: Run this once in Postman to create 10,000 students
app.post('/seed', async (req, res) => {
    try {
        await Student.deleteMany({}); // Clear old data
        const students = [];
        for (let i = 1; i <= 10000; i++) {
            students.push({
                name: `Student ${i}`,
                rollNo: i,
                email: `student${i}@example.com`
            });
        }
        await Student.insertMany(students);
        res.status(201).json({ message: "10,000 Students created successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Search Route: The one we will test for performance
// GET http://localhost:8050/search?roll=9999
app.get('/search', async (req, res) => {
    try {
        const roll = parseInt(req.query.roll);
        
        // We use .explain("executionStats") to see the "Under the hood" performance
        const result = await Student.find({ rollNo: roll }).explain("executionStats");
        
        const stats = result.executionStats;
        // console.log('Stats',stats);

        res.json({
            message: "Query stats retrieved",
            queryStrategy: result.queryPlanner.winningPlan.stage, // Shows COLLSCAN or IXSCAN
            totalDocsExamined: stats.totalDocsExamined,
            executionTimeMillis: stats.executionTimeMillis, // Time taken in milliseconds
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(8050, () => console.log("Server running on http://localhost:8050"));



// Step 1: The "Slow" Search (No Index)
// Ensure the line studentSchema.index({ rollNo: 1 }); is commented out.

// Postman: GET http://localhost:8050/search?roll=9999

// Result to show students: * queryStrategy: "COLLSCAN" (Collection Scan - the bad one).

// totalDocsExamined: 10,000. MongoDB had to check every single student to find number 9,999.

// Step 2: The "Fast" Search (With Index)
// Uncomment the line: studentSchema.index({ rollNo: 1 });

// Restart the server (so Mongoose builds the index).

// Postman: GET http://localhost:8050/search?roll=9999

// Result to show students:

// queryStrategy: "IXSCAN" (Index Scan - the fast one).


// By default, MongoDB stores data in a "heap" (a messy pile). 
// When you run this line, MongoDB creates a separate, hidden data structure (usually a B-Tree) that contains only the rollNo values, perfectly sorted from smallest to largest.
import Product from "../models/productSchema.js";

// Route: /products/skip-limit?page=&pageSize=
// 1. Skip-Limit Pagination
export async function skipLimit(req, res) {
    // 1. Get current page from URL (e.g., ?page=2). Convert string to number. Default to page 1.
    const page = parseInt(req.query.page) || 1;

    // 2. Decide how many items to show per page. Default to 5.
    const pageSize = parseInt(req.query.pageSize) || 5;

    // 3. The Math: Calculate how many items to "jump over" to reach the requested page.
    // Example: To get Page 2 with 5 items/page, we skip (2-1) * 5 = 5 items.
    const skipAmount = (page - 1) * pageSize;

    try {
        // 4. Start database query
        const products = await Product.find({})
            // 5. Order the data (1 = cheapest first). Essential for consistent pagination!
            .sort({ price: 1 }) 
            
            // 6. Jump over the items from previous pages.
            .skip(skipAmount)
            
            // 7. Stop after grabbing the specific number of items for this page.
            .limit(pageSize);

        // 8. Send the "chunk" of data back to the frontend.
        res.json(products);
        
    } catch (error) {
        // 9. Handle database or server errors.
        res.status(500).json({ message: error.message });
    }
}



// /products/keyset
// http://localhost:3000/products/keyset?lastPrice=90&lastId=7&pageSize=5
// 2. Keyset Pagination (Cursor-based with tie-breaker)
export async function keyset(req, res) {
    // 1. Get the price of the VERY LAST item currently on the user's screen
    const lastPrice = parseFloat(req.query.lastPrice);
    
    // 2. Get the ID of that same last item (used as a tie-breaker)
    const lastId = parseInt(req.query.lastId);
    
    // 3. Decide how many more items to fetch (default is 5)
    const pageSize = parseInt(req.query.pageSize) || 5;

    // 4. Initialize an empty filter (this will be used for Page 1)
    let findQuery = {};

    // 5. If we have 'markers' from a previous page, we build a specific search rule
    if (lastPrice && lastId) {
        findQuery = {
            // $or allows us to handle two scenarios:
            $or: [
                // Scenario A: Find items that are strictly more expensive than the last one
                { price: { $gt: lastPrice } },
                
                // Scenario B: If prices are EQUAL, find items with a higher ID 
                // This prevents skipping or repeating items with the same price!
                { price: lastPrice, _id: { $gt: lastId } }
            ]
        };
    }

    try {
        // 6. Execute the search using our markers
        const products = await Product.find(findQuery)
            // 7. Sort must match the query logic (Price first, then ID)
            .sort({ price: 1, _id: 1 }) 
            
            // 8. Grab only the next "chunk" of data
            .limit(pageSize);

        // 9. Send the results back
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// The "Tie-Breaker" Logic:
// "What if 10 products all cost exactly $99?"
// If we only used price: { $gt: 99 }, MongoDB would skip all those products! 
// By adding { price: 99, _id: { $gt: lastId } }, we tell MongoDB: "Stay on the $99 items, but give me the next ones in line based on their ID."






// /products/filter?category=&rating=&lastPrice=&lastId=&pageSize=
// http://localhost:3000/products/filter?category=Electronics&rating=4
// http://localhost:3000/products/filter?category=Electronics&rating=4&lastPrice=150&lastId=8&pageSize=5

// 3. Filter + Keyset Pagination
export async function filterKeyset(req, res) {
    // 1. Destructure all possible parameters from the URL query
    const { category, rating, lastPrice, lastId, pageSize: pageSizeParam } = req.query;
    
    // 2. Set the limit for items per request (default to 5)
    const pageSize = parseInt(pageSizeParam) || 5;

    // 3. Initialize two separate filter objects
    let baseFilter = {};   // For user choices (Category, Rating)
    let keysetFilter = {}; // For pagination markers (Last Price, Last ID)
    
    // --- BUILD BASE FILTER ---
    // 4. If the user picked a category (e.g., "Electronics"), add it to the search
    if (category) {
        baseFilter.category = category;
    }
    // 5. If the user wants highly-rated items, add a "Greater than or equal to" rule
    if (rating) {
        baseFilter.rating = { $gte: parseFloat(rating) }; 
    }
    
    // --- BUILD KEYSET FILTER ---
    // 6. If we are NOT on page 1, use the markers to find where we left off
    if (lastPrice && lastId) {
        const parsedLastPrice = parseFloat(lastPrice);
        const parsedLastId = parseInt(lastId);

        keysetFilter = {
            // $or ensures we don't miss items with the same price
            $or: [
                { price: { $gt: parsedLastPrice } }, // Strictly higher price
                { price: parsedLastPrice, _id: { $gt: parsedLastId } } // Same price, newer ID
            ]
        };
    }
    
    // 7. SPREAD OPERATOR: Merge both objects into one final query
    // This creates a query like: { category: "Electronics", price: { $gt: 500 } }
    const finalQuery = { ...baseFilter, ...keysetFilter }; 

    try {
        // 8. Execute the filtered, paginated search
        const products = await Product.find(finalQuery)
            // 9. Sorting must match our Keyset logic (Price then ID)
            .sort({ price: 1, _id: 1 })
            .limit(pageSize);

        // 10. Return the filtered "chunk" of products
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Why use ...baseFilter?
// Explain to your students that using the spread operator (...) is a clean 
// way to build dynamic queries. If the user doesn't select a category, 
// baseFilter stays empty and doesn't affect the search. 
// If they do, it gets "mixed in" perfectly with the pagination markers.

// The "Amazon" Example:
// Ask your students to visualize this:

// User Action: Clicks "Mobile Phones" (sets category).

// User Action: Selects "4 Stars & Up" (sets rating).

// User Action: Scrolls to the bottom (Frontend sends lastPrice and lastId of the last phone seen).

// Result: This function finds the next 5 phones that fit all those rules perfectly and instantly.
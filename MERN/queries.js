// queries.js
const { MongoClient } = require("mongodb");

async function runQueries() {
  const uri = "mongodb://127.0.0.1:27017"; // or your MongoDB Atlas URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("bookstore");
    const books = db.collection("books");

    // Find all books
    const allBooks = await books.find().toArray();
    console.log("All Books:", allBooks);

    // Find books cheaper than $13
    const cheapBooks = await books.find({ price: { $lt: 13 } }).toArray();
    console.log("Books under $13:", cheapBooks);

    // Sort by year (descending)
    const sorted = await books.find().sort({ year: -1 }).toArray();
    console.log("Sorted by year:", sorted);

    // Update one book's price
    await books.updateOne({ title: "1984" }, { $set: { price: 9.99 } });

    // Aggregation example: average price
    const avgPrice = await books.aggregate([
      { $group: { _id: null, avgPrice: { $avg: "$price" } } }
    ]).toArray();
    console.log("Average price:", avgPrice);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

runQueries();

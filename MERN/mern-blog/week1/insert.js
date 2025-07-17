// insert_books.js
const { MongoClient } = require("mongodb");

async function insertBooks() {
  const uri = "mongodb://127.0.0.1:27017"; // Change if using MongoDB Atlas
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("bookstore");
    const books = db.collection("books");

    await books.insertMany([
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, price: 15.99 },
      { title: "1984", author: "George Orwell", year: 1949, price: 12.99 },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, price: 10.99 },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, price: 14.99 }
    ]);

    console.log("Books inserted successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

insertBooks();

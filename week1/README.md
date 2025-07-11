# 📚 MongoDB Fundamentals Assignment – Week 1

This assignment demonstrates fundamental operations in **MongoDB** using **Node.js**. It covers database setup, CRUD operations, advanced queries, aggregation, and indexing.



## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js (v18+)
- MongoDB installed locally or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- Git & GitHub

---

### 📥 Clone the Repository

```bash
git clone https://github.com/IvyAdev/MERN.git
cd MERN
npm install mongodb

Files Included
File	Description
insert_books.js	Script to insert sample books into the MongoDB database
queries.js	Script containing all MongoDB queries
screenshot.png	Screenshot of the MongoDB collection (from Compass)
README.md	This file – setup and instructions
Week1-Assignment.md	Assignment tasks and answers (optional)

🚀 How to Run the Code
1️⃣ Insert Sample Data
bash
Copy
Edit
node insert_books.js
This creates a database called bookstore and inserts sample book documents into the books collection.

2️⃣ Run Queries
bash
Copy
Edit
node queries.js
This file demonstrates:

Retrieving all books

Filtering books below a price threshold

Sorting books by year

Updating a document

Aggregating data to find the average price

🧪 Sample Data Inserted
json
Copy
Edit
[
  { "title": "The Hobbit", "author": "J.R.R. Tolkien", "year": 1937, "price": 15.99 },
  { "title": "1984", "author": "George Orwell", "year": 1949, "price": 12.99 },
  { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925, "price": 10.99 },
  { "title": "To Kill a Mockingbird", "author": "Harper Lee", "year": 1960, "price": 14.99 }
]
🖼️ MongoDB Screenshot
Include a screenshot of your books collection in MongoDB Compass and save it as screenshot.png.

✨ Notes
Make sure your MongoDB server is running before executing the scripts.

If using MongoDB Atlas, update the connection URI inside both insert_books.js and queries.js.

👩🏽‍💻 Author
Name: Ivy Anyango

GitHub: @IvyAdev




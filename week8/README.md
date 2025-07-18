MERN Blog Application 📝

This is a simple full-stack Blog application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to post and view blog content.

---

## 🌐 Live Demo

(To be pasted)

---

## 🚀 Features

- Create and view blog posts
- RESTful API backend with Express and MongoDB
- React frontend for rendering posts
- Communication between frontend and backend via Axios/fetch

---

## 🛠️ Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| React.js | Node.js + Express.js | MongoDB |

---

## 📁 Project Structure

.
├── client              # React Frontend
│   ├── public
│   └── src
│       ├── components
│       │   └── PostList.js
│       ├── App.js
│       └── index.js
├── server              # Express Backend
│   ├── routes
│   │   └── userroute.js
│   └── server.js
└── README.md
⚙️ Getting Started
Prerequisites
Node.js

MongoDB (local or cloud like Atlas)

Installation
1. Clone the repo
git clone https://github.com/IvyAdev/MERN.git
cd mern-blog
2. Backend Setup

cd server
npm install
node server.js
3. Frontend Setup

cd client
npm install
npm start
🧪 API Endpoints
Method	Endpoint	Description
GET	/posts	Fetch all posts
POST	/posts	Create new post


🙌 Acknowledgements
This project was created as part of the MERN Stack Integration Assignment.

📜 License
This project is licensed under the MIT License.
# MERN Blog Application

A full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This app allows users to create, read, update, and delete blog posts.

---

## 📦 Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Deployment**: Render (Backend), Vercel/Netlify (Frontend - optional)
- **CI/CD**: GitHub Actions

---

## 🚀 Live Demo

- **Backend API**: [https://mern-1-ibhl.onrender.com](https://mern-1-ibhl.onrender.com)
- **Frontend**: _Not deployed yet_

---

## 📂 Project Structure

```

mern-blog/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── server.js
│
├── README.md
└── .gitignore



## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/IvyAdev/MERN.git
cd your-repo


### 2. Backend Setup


cd server
cp .env.example .env
MONGO_URL=mongodb://127.0.0.1:27017/Hodi
MONGO_URI=mongodb+srv://anyangoivy1:qiqXTE2NzGTckGd@cluster0.ylyuc2b.mongodb.net/Hodi?retryWrites=true&w=majority&appName=Cluster0

npm install
npm start


### 3. Frontend Setup (Optional)

cd client
npm install
npm start
```

## ✅ Features

- Create, Read, Update, Delete (CRUD) blog posts
- RESTful API structure
- MongoDB connection using Mongoose
- User-friendly frontend (if deployed)
- Error handling

---

## 🔐 Environment Variables

The project uses environment variables for sensitive data.
See `.env.example` for a template.

```
MONGODB_MONGO_URI=mongodb+srv://anyangoivy1:qiqXTE2NzGTckGd@cluster0.ylyuc2b.mongodb.net/Hodi?retryWrites=true&w=majority&appName=Cluster0

PORT=5000
```

---

## 🔄 CI/CD Pipeline

This project includes a basic GitHub Actions workflow for automatic deployment.
Every push triggers the build and deploy process on Render.

---

## 📈 Monitoring Setup

- Render logs are used for monitoring build and server performance.
- You can access them via the [Render Dashboard](https://dashboard.render.com/).

---

## 👨‍💻 Author

- Name: Ivy Anyango
- GitHub: [@IvyAdev](https://github.com/IvyAdev)

```

```

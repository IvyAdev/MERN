import Post from "../models/Post.js";

// GET /api/posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST /api/posts
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
};

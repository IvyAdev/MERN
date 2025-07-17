// src/components/Posts.jsx
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Latest Posts</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 shadow rounded">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

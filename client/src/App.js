import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// client/src/App.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    useEffect(() => {
        axios
            .get("/api/posts")
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/posts", { title, content });
            setPosts([...posts, res.data]);
            setTitle("");
            setContent("");
        }
        catch (error) {
            console.error(error);
        }
    };
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "My Blog" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", placeholder: "Title", value: title, onChange: (e) => setTitle(e.target.value), required: true }), _jsx("textarea", { placeholder: "Content", value: content, onChange: (e) => setContent(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Post" })] }), _jsx("hr", {}), _jsx("div", { children: posts.map((post) => (_jsxs("div", { className: "post", children: [_jsx("h2", { children: post.title }), _jsx("p", { children: post.content })] }, post._id))) })] }));
}
export default App;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to the backend
        console.log({ title, content });
        setTitle("");
        setContent("");
        alert("Post created (not really, this is just a demo)");
    };
    return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Create a New Post" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", placeholder: "Post Title", value: title, onChange: (e) => setTitle(e.target.value), className: "w-full border p-2", required: true }), _jsx("textarea", { placeholder: "Post Content", value: content, onChange: (e) => setContent(e.target.value), className: "w-full border p-2 h-32", required: true }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2", children: "Submit" })] })] }));
};
export default CreatePost;

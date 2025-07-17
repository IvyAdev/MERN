import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/posts")
            .then((res) => setPosts(res.data));
    }, []);
    return (_jsxs("div", { children: [_jsx("h2", { children: "All Posts" }), posts.map((post, index) => (_jsxs("div", { children: [_jsx("h3", { children: post.title }), _jsx("p", { children: post.content })] }, index)))] }));
}

import { useState } from "react";
import Button from "./components/Button";
import Posts from "./components/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">React + Tailwind Week 3</h1>
      <p className="mb-2">You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>

      <Posts />
    </div>
  );
}

export default App;

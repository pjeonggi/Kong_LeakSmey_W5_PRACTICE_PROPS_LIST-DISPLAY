import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [newContent, setNewContent] = useState("");
  function handleAdd () {
    setPosts([...posts, { text: newContent }]);
    setNewContent(""); 
  };
  return (
    <div>
      <input
        type="text"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        placeholder="Enter post content"
      />
      <button onClick={handleAdd}>Add Post</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App

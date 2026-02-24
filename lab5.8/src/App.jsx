import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([{ id: 1, text: "Hello", isEdited: false }]);
 const markAsEdited = (id) => {
    setPosts(prevPosts => prevPosts.map(post => post.id === id ? { ...post, isEdited: !post.isEdited } : post));
  };
  return (
    <div className="App">
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.text} {post.isEdited && "(edited)"}</p>
          <button onClick={() => markAsEdited(post.id)}>
            {post.isEdited ? "Unmark as Edited" : "Mark as Edited"}
          </button>
        </div>
      ))}
    </div>
  )
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const PostActions = ({ onLike, onShare }) => {
  return (
    <div>
      <button onClick={onLike}>Like</button>
      <button onClick={onShare}>Share</button>
    </div>
  );
};

function App() {
  return (
    <>
      <PostActions onLike={() => alert('Liked!')} onShare={() => alert('Shared!')} />
    </>
  )
}

export default App

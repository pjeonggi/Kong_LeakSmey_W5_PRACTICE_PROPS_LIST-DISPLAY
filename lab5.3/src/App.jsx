import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const PostImage = ({ url }) => {
  // Task: If url is null, show a gray <div>. If url exists, show <img>.
  if (url) {
    return (
      <div className="img-wrapper">
        <img src={url} alt="Post Image" />
      </div>
    );
  } else {
    return (
      <div className="img-wrapper">
        <div className="gray-place" />
      </div>
    );
  }
};

function App() {
  return (
    <>
      <PostImage url={viteLogo} />
      <PostImage url={reactLogo} />
      <PostImage url={null} />
    </>
  )
}

export default App

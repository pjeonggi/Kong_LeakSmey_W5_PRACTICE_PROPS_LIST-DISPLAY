import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Children } from 'react'

const DeleteBtn = ({ id, onConfirm }) => {
  return (
    <div>
      <button onClick={() => onConfirm(id)}>Delete</button>
    </div>
  );
};

function App() {
  return (
    <>
      <DeleteBtn id={1} onConfirm={(id) => alert(`Post ${id} deleted!`)} />
    </>
  )
}

export default App

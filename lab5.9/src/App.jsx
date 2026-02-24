import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  }
  return (
    <>
      {list.map(item => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </>
  )
}

export default App

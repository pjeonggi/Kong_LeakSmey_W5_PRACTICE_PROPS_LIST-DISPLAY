import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <nav>Navbar</nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

function App() {

  return (
    <>
      <Layout>
        <h1>My Items</h1>
      </Layout>
    </>
  )
}

export default App

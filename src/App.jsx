import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/common/NavBar'
import Banners from './components/common/Banners'
import Home from './components/pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
    </ div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { JsPage } from './pages/jsCardList'
import { Box, Container } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>home page</h1>}></Route>
        <Route path="/js-quiz" element={<JsPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App

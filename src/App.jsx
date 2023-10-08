/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { JsPage } from './pages/jsCardList'
import { Box, Container } from '@mui/material'
import Nav from './components/Nav'
import './App.css'
import { HtmlPage } from './pages/htmlCardList'
import Home from './pages/home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/js-quiz" element={<JsPage />}></Route>
        <Route path="/html-quiz" element={<HtmlPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App

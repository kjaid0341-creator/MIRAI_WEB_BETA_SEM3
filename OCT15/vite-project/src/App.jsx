import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from '../../../OCT14/mern/src/components/Home';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
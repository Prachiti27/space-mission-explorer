import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Missions from './pages/Missions'
import About from './pages/About'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/missions' element={<Missions/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/favorite-missions' element={<Favorites/>}/>
    </Routes>
  )
}

export default App

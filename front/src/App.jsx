import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home/Home"
import SportPages from "./pages/SportPages/SportPages"
import Classic from './components/Classic/Classic'
import Login from './pages/Login/Login'
import Registr from './pages/Registr/Registr'
import Favorites from './components/Favorites/Favorites'
import Classicpages from './pages/Classicpages/Classicpages'
import Shop from './pages/Shop/Shop'
const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sport" element={<SportPages />} />
        <Route path="/classic" element={<Classicpages />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/shop' element={<Shop />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
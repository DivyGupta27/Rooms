import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Filters from './components/Filters'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowRooms from './components/ShowRooms'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
  return (
    <div>
     
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Card/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='/hotels' element={<ShowRooms type="hotel"/>}/>
      <Route path='/workspaces' element={<ShowRooms type="workplace"/>}/>
      <Route path='/destinations' element={<ShowRooms type="destination"/>}/>
      
      </Routes>
      <Footer/>
     </BrowserRouter>

    </div>
  )
}

export default App
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowRooms from './components/ShowRooms'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Modal from './components/Modal'
import RoomContext from './contextApi/RoomContext.js'
import Booking from './components/Booking'
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/UserDashboard'
import AdminPanel from './components/AdminPanel'
import Error from './components/Error'
import LearnMore from './components/Lernmore'

const App = () => {
  const { userid } = useContext(RoomContext)
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/hotels' element={<ShowRooms type="hotel" />} />
          <Route path='/workspaces' element={<ShowRooms type="workplace" />} />
          <Route path='/destinations' element={<ShowRooms type="destination" />} />
          <Route path='/luxury' element={<ShowRooms category="luxury" />} />
          <Route path='/budget' element={<ShowRooms category="budget" />} />
          <Route path='/business' element={<ShowRooms category="business" />} />
          <Route path='/resorts' element={<ShowRooms category="resort" />} />
          <Route path='/vacation' element={<ShowRooms category="vacation" />} />
          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='*' element={<Error />} />
          <Route path='learnmore' element={<LearnMore />} />
          <Route
            path="/model"
            element={
              <PrivateRoute>
                <Modal />
              </PrivateRoute>
            }
          />
          {/* <Route path='/booking' element={<Booking/>}/> */}
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />



        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
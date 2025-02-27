import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom'
import Users from './components/users/Users'
import Create from './components/users/Create'
import Details from './components/users/Details';
export default function() {
  return (
    <>
  <Navbar/>
 
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/users' element={<Users/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='*' element={<h2>Page Not Found</h2>}></Route>
    <Route path='/users/:id' element={<Details/>}></Route>
  </Routes>
  <Footer/>

    </>
  )
}

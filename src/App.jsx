import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'

const App = () => {
  return (
    <Routes>
      <Route  path="/"  element={<Nav/>}>
      <Route  index element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
  


    </Routes>
  )
}

export default App

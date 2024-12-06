import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='container'>
       <ul className='icons'>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/login">Login</Link></li>
         <li><Link to="/signup">Signup</Link></li>

    </ul>
  </div>
      <Outlet/>
    </>
  )
}

export default Nav
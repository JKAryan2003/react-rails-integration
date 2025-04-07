import React, { useState, useEffect } from 'react'
import {Link, Outlet} from 'react-router-dom'

const NavBar = ({token, setToken}) => {
  
  useEffect(() => {
    console.log("Loaded First Time")
  }, [])

  console.log(token)
  
  const handleLogOut = () => {
    localStorage.removeItem("token")
    setToken()
  }
  return (
    <div>
      {token != null ? 
      (
        <>
          <Link to='/users'>Users</Link>
          <button onClick={handleLogOut}>Log Out</button>
        </>
        
      ) : 
      (
        <>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </>   
      )
      }
      <Outlet/>
    </div>
  )
}

export default NavBar
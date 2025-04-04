import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </div>
  )
}

export default NavBar
import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <Link to='/' style={{paddingRight: '10px'}}>Home</Link>
      <Link to='/categories' style={{paddingRight: '10px'}}>All Categories</Link>
      <Link to='/categories/new' style={{paddingRight: '10px'}}>New Category</Link>
    </div>

  )
}

export default NavBar
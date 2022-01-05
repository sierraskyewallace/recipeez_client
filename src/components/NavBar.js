import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: '#0c3d59', paddingTop: '12px', paddingBottom: '12px' }}>

      <NavLink to="/" className="navbar-logo" style={{padding: '40px', margin: '0 8px 8px', color: 'white'}}>
        Scenter
      </NavLink>

      <NavLink to="/" style={link} className="navbar-link">
        Home
      </NavLink>

      <NavLink to="/about" style={link} className="navbar-link">
        About
      </NavLink>

      <NavLink to="/recipes" style={link} className="navbar-link">
        Recipes
      </NavLink>

      </div>
  )
}

const link = {
  width: '100px',
  padding: '15px',
  margin: '0 8px 8px',
  textDecoration: 'none',
  color: 'white',
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: '#140303', paddingTop: '12px', paddingBottom: '12px' }}>

      <NavLink to="/" className="navbar-logo" style={{padding: '40px', margin: '0 8px 8px', color: 'white'}}>
        Recipeez
      </NavLink>

      <NavLink to="/recipes" style={link} className="navbar-link">
        All Recipes
      </NavLink>

      <NavLink to="/categories" style={link} className="navbar-link">
        Categories
      </NavLink>
      
      <NavLink to="/about" style={link} className="navbar-link">
        About
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
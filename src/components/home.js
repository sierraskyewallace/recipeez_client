import React from "react";
import { Link } from 'react-router-dom'



const Home = () => {

    return (
      <div className="home">
        <div className="home-center">
          <h2>Recipeez</h2>
            <Link to='/coding'>Coding component</Link>
        </div>
      </div>
    );
  }
  
  export default Home;
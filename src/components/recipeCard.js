import React from 'react'
import { Link } from 'react-router-dom'
 
const RecipeCard = ({ recipe }) => {

    return (
      <div className="recipe-card">
        <div className="container-fluid text-center">
          <img src={recipe.image_url} width="170" height="220" alt="pic" />
          <h4 className="recipe-name"><Link key={recipe.id} to={`/recipes/${recipe.id}`}>{recipe.name}</Link></h4>
          <h5 className="recipe-category">{recipe.category}</h5>
            <p className="recipe-description">{recipe.description}</p>
            <p className="recipe-instructions}">{recipe.instructions}</p>
            <p className="recipe-instructions}">{recipe.ingredients}</p>

        </div>
      </div>
    )
}

export default RecipeCard;
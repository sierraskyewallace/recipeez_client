import React from 'react';
import RecipeCard from './recipeCard';

const RecipeList = ({ recipes }) => {
  
    const renderRecipes = recipes.map(recipe =>
       <RecipeCard key={recipe.id} recipe={recipe} />
    );
  
      return (
        <div className="recipes-list">
          <div className="container-fluid">
            <div className="row">
              {renderRecipes}
            </div>
          </div>  
        </div>
      )
  
  }
  
  export default RecipeList;
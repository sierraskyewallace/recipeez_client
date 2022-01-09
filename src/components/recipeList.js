import React from 'react';
import RecipeCard from './recipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <div className="container-fluid">
        <div className="row">
          {recipes.map(recipe => (
            <div className="col-md-4" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
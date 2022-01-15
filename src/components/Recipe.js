import React from "react";

const Recipe = ({ recipe }) => {
    return (
        <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
        <img src={recipe.image_url} />
        </div>
    );
    }

    export default Recipe;
import React from "react";


const RecipeList = (props) => {
    return (
        <div>
        <h1>Recipe List</h1>
        <ul>
            {props.recipes.map(recipe => (
            <li key={recipe.id}>
                <h2>{recipe.name}</h2>
                <p>{recipe.description}</p>
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default RecipeList;
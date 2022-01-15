import React from "react";


const Recipes = ({ recipes }) => {
    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => {
                    return (
                        <li key={recipe.id}>
                            <h2>{recipe.attributes.name}</h2>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};


       
export default Recipes;


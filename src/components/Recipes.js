import React from "react";

const Recipes = ({recipes}) => {

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => <li key={recipe.id}>{recipe.attributes.name}</li>)}
            </ul>




        </div>
    );

}

export default Recipes;
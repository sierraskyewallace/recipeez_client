import React from "react";


const Recipe = ({ recipe }) => {
    return (
        <div>
            <h4>{recipe.attributes.name}</h4>
            <p>{recipe.attributes.description}</p>
        </div>
    );
};


    export default Recipe;
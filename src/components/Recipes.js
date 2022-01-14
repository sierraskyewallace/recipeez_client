import React from "react";

const Recipes = ({recipes}) => {
    return (
        <div>
            {recipes.map(recipe => {
                return (
                    <li key={recipe.id}>
                            {recipe.attributes.name} | 
                    </li>
                )
            })}
        </div>
    )
}

    


    

        
export default Recipes;
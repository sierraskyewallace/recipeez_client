import React from "react";

const Recipes = (props) => {
    return (
        <div>
            {props.recipes.map(recipe => {
                return (
                    <li key={recipe.attributes.id}>
                            {recipe.attributes.name} - {recipe.attributes.category.name}
                    </li>
                )
            })}
        </div>
    )
}

    


    

        
export default Recipes;
import React from "react";

const Recipes = (props) => {
    return (
        <div>
            {props.recipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <h4>{recipe.attributes.name}</h4>

                    </div>
                )
            })}
        </div>
    )
}
    


    

        
export default Recipes;
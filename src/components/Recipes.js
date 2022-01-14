import React from "react";

const Recipes = ({recipes}) => {
    return (
        <div>
            {recipes.map(recipe => {
                return (
                    <li key={recipe.id}>
                            {recipe.attributes.name} | {recipe.attributes.tags.map(tag => {
                                return (
                                    <span key={tag.id}>{tag.name}</span>
                                )
                            })}
                    </li>
                )
            })}
        </div>
    )
}


    

    


    

        
export default Recipes;
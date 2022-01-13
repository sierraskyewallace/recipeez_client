import React from "react";
import Recipes from "../components/Recipes";
import RecipeInput from "../components/recipeInput";


class RecipesContainer extends React.Component {
  render() {
    return (
        
        <div>
            <Recipes />
            <RecipeInput />
        </div>
        );
    }
}

export default RecipesContainer;
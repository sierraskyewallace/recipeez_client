import React from 'react'
import Recipes from '../components/Recipes'
import RecipeInput from '../components/recipeInput'


class RecipesContainer extends React.Component {

  render() {
    return (
      <div>
        <RecipeInput category={this.props.category}/><br></br>
        <Recipes recipes={this.props.recipes}/>
      </div>
    )
  } 
}

export default RecipesContainer
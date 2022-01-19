import React from 'react'
import Recipes from '../components/Recipes'
import RecipeInput from '../components/recipeInput'
import { connect } from 'react-redux'


class RecipesContainer extends React.Component {

  state = {
    
  }

  componentDidMount() {
  }


  render() {
    return (
      <div>
        <br></br>
        <RecipeInput category={this.props.category}/>
        <br></br>
        <br></br>
        <Recipes recipes={this.props.category && this.props.category.recipes}/>
        
              </div>
    )
  } 
}



export default connect()(RecipesContainer)
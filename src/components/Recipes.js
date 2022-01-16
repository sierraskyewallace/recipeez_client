import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'

class Recipes extends React.Component {

state = {}


handleDelete = (recipe) => {
    this.props.deleteRecipe(recipe.id, recipe.category_id)
  }

render() {
  return (
      <div>
        {this.props.recipes && this.props.recipes.map(recipe =>
            <div key={recipe.id}>
               <h3>{recipe.name}</h3> 
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
                <img src={recipe.image_url} alt={recipe.name}/>
                <button onClick={() => this.handleDelete(recipe)}>Delete</button>
            </div>
            )}
        </div>
        )
    }
}

export default connect(null, {deleteRecipe})(Recipes)
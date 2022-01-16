import React from 'react'
import {connect} from 'react-redux'
import {deleteRecipe} from '../actions/deleteRecipe'

class Recipes extends React.Component {

state = {}


handleDelete = (recipe) => {
    this.props.deleteRecipe(recipe.id, recipe.category_id)
    //refresh page
    window.location.reload()
  }

render() {
  return (
      <div>
        {this.props.recipes && this.props.recipes.map(recipe =>
            <div key={recipe.id}>
                <div className="recipe-card"style={{backgroundColor: "#d8c4e3", width: '500px', text: 'center', margin: 'auto', padding: '10px'}}>

                <img src={recipe.image_url} alt={recipe.name}style={{width: '500px', height: '240px'}}/>
               <h2>{recipe.name}</h2> 
                Ingredients - <p>{recipe.ingredients} </p>
                
                Instructions - <p>{recipe.instructions}</p>
                
                <br></br>
                <button onClick={() => this.handleDelete(recipe)}>Delete</button>
            </div>
            <br></br>
            </div>
            )}
        </div>
        )
    }
}

export default connect(null, {deleteRecipe})(Recipes)
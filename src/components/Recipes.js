import React from 'react'
import {connect} from 'react-redux'


class Recipes extends React.Component {

state = {}


render() {
  return (
      <div>
        {this.props.recipes && this.props.recipes.map(recipe =>
            <div key={recipe.id}>
               <h3>{recipe.name}</h3> 
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
                <img src={recipe.image_url} alt={recipe.name}/>
            </div>
            )}
        </div>
        )
    }
}

export default connect(null, {})(Recipes)
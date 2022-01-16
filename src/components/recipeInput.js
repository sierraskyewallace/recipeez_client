
import React from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions/addRecipe";


class RecipeInput extends React.Component {
// set category id of current category to form


  state = {
    name: "",
    instructions: "",
    ingredients: "",
    image_url: "",
    

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRecipe(this.state, this.props.category.id)
    this.setState({
        name: "",
        instructions: "",
        ingredients: "",
        image_url: "",
    })
    window.location.reload()
  }

  render() {
    return (
      <div>
        Add a Recipe to this Category:
        <form onSubmit={this.handleSubmit}>

            
            <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                
                
                <input type='text' placeholder='Instructions' value={this.state.instructions} name="instructions" onChange={this.handleChange}/><br/>
    
                
                <input type='text' placeholder='Ingredients' value={this.state.ingredients} name="ingredients" onChange={this.handleChange}/><br/>
    
                
                <input type='text' placeholder='Image URL' value={this.state.image_url} name="image_url" onChange={this.handleChange}/><br/>
    
                <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default connect(null, {addRecipe})(RecipeInput)
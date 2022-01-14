
import React from "react";

import { connect } from "react-redux";
import addRecipe from "../actions/addRecipe";



class RecipeInput extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        name: "",
        description: "",
        instructions: "",
        ingredients: "",
        image_url: "",
        tag: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addRecipe(this.state);
    }



    render() { 
        


        return ( 
            <div>
                <form>
                    <label> Name: </label><br></br>
                    <input type="text" name="name"value={this.state.name} onChange={this.handleChange} /><br></br>
                    <label> Description: </label><br></br>
                    <input type="text" name="description"value={this.state.description} onChange={this.handleChange} /><br></br>
                    <label> Instructions: </label><br></br>
                    <input type="text" name="instructions"value={this.state.instructions} onChange={this.handleChange} /><br></br>
                    <label> Ingredients: </label><br></br>
                    <input type="text" name="ingredients"value={this.state.ingredients} onChange={this.handleChange} /><br></br>
                    <label> Image: </label><br></br>
                    <input type="text" name="image_url"value={this.state.image_url} onChange={this.handleChange}/><br></br>
                    
                    <label> Tag: </label><br></br>
                    
                    
                    
                    <br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
         );
    }
    
}


    export default connect(null, {addRecipe})(RecipeInput);
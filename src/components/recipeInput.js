
import React from "react";
import DropDown from "./dropDown";
//import addRecipe from "../actions/addRecipe";



class RecipeInput extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        name: "",
        description: "",
        instructions: "",
        ingredients: "",
        image_url: "",
        category: "",
        }
}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addRecipe(this.state);
        this.setState({
            name: "",
            description: "",
            instructions: "",
            ingredients: "",
            image_url: "",
            category: "",
        });
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
                    
                    <label> Category: </label><br></br>
                    
                    <DropDown onChange={this.handleChange} />
                    
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
         );
    }
}

    export default RecipeInput;
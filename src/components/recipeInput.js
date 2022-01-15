
import React from "react";
import { connect } from "react-redux";
import addRecipe from "../actions/addRecipe";



class RecipeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            ingredients: "",
            instructions: "",
            image_url: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
            description: "",
            ingredients: "",
            instructions: "",
            image_url: "",
        });
        this.props.addRecipe(this.state);  
    }

    render() {

        return (
            <div className="recipe-input">
                <h1>Add a Recipe</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" name="name" onChange={this.handleChange} /><br></br>
                    </label>
                    <label>
                        Description:
                    <input type="text" name="description" onChange={this.handleChange} /><br></br>
                    </label>
                    <label>
                        Ingredients:
                    <input type="text" name="ingredients" onChange={this.handleChange} /><br></br>
                    </label>
                    <label>
                        Instructions:
                    <input type="text" name="instructions" onChange={this.handleChange} /><br></br>
                    </label>
                    <label>
                        Image URL:
                    <input type="text" name="image_url" onChange={this.handleChange} /><br></br>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
    export default connect(null, { addRecipe })(RecipeInput);

import React from "react";




class RecipeInput extends React.Component {

    render() { 

        return ( 
            <div>
                <form>
                    <label> Name: </label><br></br>
                    <input type="text" name="name" /><br></br>
                    <label> Description: </label><br></br>
                    <input type="text" name="description" /><br></br>
                    <label> Instructions: </label><br></br>
                    <input type="text" name="instructions" /><br></br>
                    <label> Ingredients: </label><br></br>
                    <input type="text" name="ingredients" /><br></br>
                    <label> Image: </label><br></br>
                    <input type="text" name="image_url" /><br></br>
                    
                    <label> Category: </label><br></br>

                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}

    export default RecipeInput;
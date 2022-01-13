import React from "react";


class RecipeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            categories: [],
        }
    }
    


    render() { 

        const categories = this.props.categories;
        const categoriesOptions = categories.map(category => {
            
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
                    <option key={category} value={category.id}>{category.name}</option>
                    <button type="submit">Submit</button>


                </form>
            </div>
        )
        })
        return (
            <div>
                {categoriesOptions}
            </div>
        )
    }
}

    export default RecipeInput;
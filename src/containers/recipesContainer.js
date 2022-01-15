import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import fetchRecipes from "../actions/fetchRecipes";
import Recipes from "../components/Recipes";
import RecipeInput from "../components/recipeInput";



class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes();
    }


  render() {
    return (
        
        <div>
            <Routes>
                <Route exact path="/recipes" element={<Recipes recipes={this.props.recipes} />} />
                <Route path="/recipes/new" element={<RecipeInput />} />
            </Routes>
        </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        recipes: state.recipes

    };
};

export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer);
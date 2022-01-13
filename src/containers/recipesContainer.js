import React from "react";
import { connect } from "react-redux";
import fetchRecipes from "../actions/index";
import Recipes from "../components/Recipes";
import RecipeInput from "../components/recipeInput";


class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes();
    }


  render() {
    return (
        
        <div>
            <Recipes recipes={this.props.recipes} />
            <RecipeInput />
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
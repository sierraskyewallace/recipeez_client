import React from 'react';
import RecipeList from '../components/recipeList';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/index.js';


class RecipesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    const { recipes } = this.props

    return (
      <div>
          <RecipeList recipes={recipes} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer);
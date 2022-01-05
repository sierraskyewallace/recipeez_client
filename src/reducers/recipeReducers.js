const API_URL = 'http://localhost:3000/api/v1';

const setRecipes = (state, action) => {
    return {
        ...state,
        recipes: action.recipes
    };
    }

const addRecipe = (state, action) => {
    return {
        ...state,
        recipes: [...state.recipes, action.recipe]
    };
    }

const removeRecipe = (state, action) => {
    return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.id)
    };
    }

const setCategory = (state, action) => {
    return {
        ...state,
        categories: action.categories
    };
    }

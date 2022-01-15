

export default function recipeReducer(state = {recipes: []}, action) {

    switch (action.type) {
        case 'FETCH_RECIPES':
            return {...state, recipes: action.payload};
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.payload]};
        case 'DELETE_RECIPE':
            return {...state, recipes: state.recipes.filter(recipe => recipe.id !== action.payload)};



            default:
    return state;
}
}


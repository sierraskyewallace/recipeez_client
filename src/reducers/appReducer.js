

export default function recipeReducer(state = {recipes: [], categories: []}, action) {

    switch (action.type) {
        case 'FETCH_RECIPES':
            return {...state, recipes: action.payload};
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.payload]};
        case 'DELETE_RECIPE':
            return {...state, recipes: state.recipes.filter(recipe => recipe.id !== action.payload)};
        case 'FETCH_CATEGORIES':
            return {...state, categories: action.payload};
        case 'ADD_CATEGORY':
            return {...state, categories: [...state.categories, action.payload]};
        case 'DELETE_CATEGORY':
            return {...state, categories: state.categories.filter(category => category.id !== action.payload)};
            
            default:
    return state;
}
}


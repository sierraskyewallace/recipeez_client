

export default function appReducer(state = {categories: []}, action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {...state, categories: action.payload}
    case 'ADD_CATEGORY':
      return {...state, categories: [...state.categories, action.payload]}
    case 'ADD_RECIPE':
      return {...state, categories: state.categories.map(category => {
        if (category.id === action.payload.category_id) {
          return {...category, recipes: [...category.recipes, action.payload]}
        } else {
          return category
        }
      })}
    default:
      return state
  }
}
  


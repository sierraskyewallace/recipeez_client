

export default function appReducer(state = {categories: []}, action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {categories: action.payload}
    case 'ADD_CATEGORY':
      return {...state, categories: [...state.categories, action.payload]}
    case 'ADD_RECIPE':
      let categories = state.categories.map(category => {
        if (category.id === action.payload.id) {
          return action.payload
        } else {
          return category
        }
      })
      return {...state, categories: categories}
      case 'DELETE_RECIPE':
        let newRecipes = state.categories.map(category => {
          if (category.id === action.payload.id) {
            return action.payload
          } else {
            return category
          }
        })
        return {...state, categories: newRecipes}
    default:
      return state
  }
}



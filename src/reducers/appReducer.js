

export default function appReducer(state = {categories: []}, action) {
    switch (action.type) {
      case 'FETCH_CATEGORIES':
        return {categories: action.payload}
      case 'ADD_CATEGORY':
        return {...state, categories: [...state.categories, action.payload]}
      case 'ADD_RECIPE':
        let categories = state.categories.map(category => {
          if (category.id === action.payload.category_id) {
            
            return action.payload
            
          } else {
            return category
          }
        })
        return {...state, categories: categories}
      default:
        return state
    }
  }


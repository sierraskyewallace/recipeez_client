export default function categoriesReducer(state = [], action) {
    switch (action.type) {
  
      case 'FETCH_CATEGORIES':{
        const { categories } = action; 
        return categories;
      }
  
    default:
      return state    
    }
  }
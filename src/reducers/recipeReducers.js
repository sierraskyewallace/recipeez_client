export default function recipesReducer(state = [], action) {
    switch (action.type) {
  
      case 'FETCH_RECIPES':{
        const { recipes } = action; 
        return recipes;
      }
  
    default:
      return state    
    }
  }
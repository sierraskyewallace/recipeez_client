export const addRecipe = (recipe, categoryId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/categories/${categoryId}/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
      })
      .then(response => response.json())
      .then(recipe => {
          if (recipe.error) {
            alert(recipe.error)
          } else {
            dispatch({type: 'ADD_TRANSACTION', payload: recipe})
          }
        }
      )
    }
  }
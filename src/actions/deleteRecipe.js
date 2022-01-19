export const deleteRecipe = (categoryId, recipeId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/categories/${categoryId}/recipes/${recipeId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(category => dispatch({type: 'DELETE_RECIPE', payload: category}))
  }
}
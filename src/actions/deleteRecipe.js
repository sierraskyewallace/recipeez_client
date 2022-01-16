export const deleteRecipe = (recipeId, categoryId) => {
    return async (dispatch) => {
      const response = await fetch(`http://localhost:3000/api/v1/categories/${categoryId}/recipes/${recipeId}`, {
            method: 'DELETE'
        })
        const category = await response.json()
        return dispatch({ type: 'DELETE_RECIPE', payload: category })
    }
  }
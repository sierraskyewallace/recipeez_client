
const API_URL = 'http://localhost:3000/api/v1';


export const getRecipe = (id) => {
    return (dispatch) => {

        fetch(`${API_URL}/recipes/${id}`)
            .then(response => response.json())
            .then(recipe => {
                dispatch({type: 'FETCH_RECIPE', payload: recipe.data});
            });
    };
    
}
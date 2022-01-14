const API_URL = 'http://localhost:3000/api/v1';

export default function addRecipe(recipe) {
    return (dispatch) => {
        fetch(`${API_URL}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(recipe => {
            dispatch({type: 'ADD_RECIPE', payload: recipe.data});
        });
    };
}


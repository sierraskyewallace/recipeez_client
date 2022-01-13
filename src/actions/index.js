

const API_URL = 'http://localhost:3000/api/v1';

export default function fetchRecipes() {
    return (dispatch) => {

    fetch(`${API_URL}/recipes`)
        .then(response => response.json())
        .then(recipes => {
            dispatch({type: 'FETCH_RECIPES', payload: recipes});
        });

 
}}

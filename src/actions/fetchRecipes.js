



export default function fetchRecipes() {
    return (dispatch) => {

    fetch(`http://localhost:3000/api/v1/categories/${id}/recipes`)
        .then(response => response.json())
        .then(recipes => {
            dispatch({type: 'FETCH_RECIPES', payload: recipes});
        });
    };

}



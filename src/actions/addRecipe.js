export default function addRecipe(recipe) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(recipe => {
            dispatch({type: 'ADD_RECIPE', payload: recipe.data});
        });
    };
}


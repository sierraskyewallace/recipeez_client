const API_URL = 'http://localhost:3000/api/v1';

export const addCategory = (category) => {
    return (dispatch) => {
        fetch(`${API_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(category)
        })
        .then(response => response.json())
        .then(category => {
            dispatch({type: 'ADD_CATEGORY', payload: category});
        });
    };
}
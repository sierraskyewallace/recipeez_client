
const API_URL = 'http://localhost:3000/api/v1';

export const fetchCategories = () => {
    return (dispatch) => {

    fetch(`${API_URL}/categories`)
        .then(response => response.json())
        .then(categories => {
            dispatch({type: 'FETCH_CATEGORIES', payload: categories});
        });
    };

}
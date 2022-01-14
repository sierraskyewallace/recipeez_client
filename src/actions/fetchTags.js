
export default function fetchTags() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/tags')
            .then(response => response.json())
            .then(tags => {
                dispatch({type: 'FETCH_TAGS', payload: tags.data});
            });
    };
}


export function fetchCategories() {
    return async (dispatch) => {
        const resp = await fetch('http://localhost:3000/api/v1/categories')
        const categories = await resp.json()
        
                
        return dispatch({ type: 'FETCH_CATEGORIES', payload: categories })
    }
}


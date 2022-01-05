

const API_URL = 'http://localhost:3000/api/v1';


    export const fetchRecipes = () => {
        return (dispatch) => {
            return fetch(`${API_URL}/recipes`)
            .then(response => response.json())
            .then(recipes => {
                dispatch(setRecipes(recipes));
            });
        };
    };

    export const fetchCategories = () => {
        return (dispatch) => {
            return fetch(`${API_URL}/categories`)
            .then(response => response.json())
            .then(categories => {
                dispatch(setCategories(categories));
            });
        };
    };

    export const fetchRecipe = (id) => {
        return (dispatch) => {
            return fetch(`${API_URL}/recipes/${id}`)
            .then(response => response.json())
            .then(recipe => {
                dispatch(setRecipe(recipe));
            });
        };
    };

    export const createRecipe = (recipe) => {
        return (dispatch) => {
            return fetch(`${API_URL}/recipes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipe)
            })
            .then(response => response.json())
            .then(recipe => {
                dispatch(addRecipe(recipe));
            });
        };
    };
    
    export 

    const setRecipes = recipes => {
        return {
            type: 'FETCH_RECIPES',
            recipes
        };
        }

    const setCategories = categories => {
        return {
            type: 'FETCH_CATEGORIES',
            categories
        };
        }

    const setRecipe = recipe => {
        return {
            type: 'SET_RECIPE',
            recipe
        };
        }

    const addRecipe = recipe => {
        return {
            type: 'ADD_RECIPE',
            recipe
        };
        }

    const removeRecipe = recipe => {
        return {
            type: 'REMOVE_RECIPE',
            recipe
        };
        }
        

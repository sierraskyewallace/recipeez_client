
export default function categoryReducer(state = {categories: []}, action) {
    
        switch (action.type) {
            case 'FETCH_CATEGORIES':
                return {...state, categories: action.payload};
            case 'ADD_CATEGORY':
                return {...state, categories: [...state.categories, action.payload]};
            case 'DELETE_CATEGORY':
                return {...state, categories: state.categories.filter(category => category.id !== action.payload)};
            default:
        return state;
    }
    }
    
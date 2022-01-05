import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import recipesReducer from './reducers/recipeReducers.js'
import categoriesReducer from './reducers/categoriesReducer.js'
import thunk from 'redux-thunk'


const reducer = combineReducers({
  perfumes: recipesReducer,
  comments: categoriesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
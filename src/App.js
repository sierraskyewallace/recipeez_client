import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import { connect } from 'react-redux';
import RecipesContainer from './containers/recipesContainer';
import CategoriesContainer from './containers/categoriesContainer';


class App extends React.Component {

  
  componentDidMount() {
  }




  render() {
    return (
      <div className="App">
        
        <Home />

        <RecipesContainer />
        <CategoriesContainer />
      </div>
    );
  }
}



export default connect()(App);




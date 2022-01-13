import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import { connect } from 'react-redux';
import RecipesContainer from './containers/recipesContainer';


class App extends React.Component {

  
  componentDidMount() {
  }




  render() {
    return (
      <div className="App">
        
        <Home />

        <RecipesContainer />
      </div>
    );
  }
}



export default connect()(App);




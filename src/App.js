import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import NavBar from './components/navBar';
import Home from './components/home';
import { connect } from 'react-redux';
import CategoriesContainer from './containers/categoriesContainer';




class App extends React.Component {

  
  componentDidMount() {
  }
 

  render() {
    return (
      <div className="App"> 
        <Home />
        <CategoriesContainer categories={this.props.categories} />
   
      </div>
    );
  }
}



export default connect()(App);





import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import RecipeList from './components/recipeList';
import CategoryList from './components/categoryList';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={RecipeList} />
          <Route exact path="/categories" component={CategoryList} />
        </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;



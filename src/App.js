import React from 'react';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';
import RecipesContainer from './containers/recipesContainer';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
        <Home />
        <Routes>
          <Route exact path="/recipes" component={RecipesContainer} />
        </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;



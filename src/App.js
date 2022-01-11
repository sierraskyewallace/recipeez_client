import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './components/home';


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/recipes/1')
      .then(response => response.json())
      .then(recipes => {
        console.log(recipes.data.attributes.name);
      });
  }





  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}


export default App;




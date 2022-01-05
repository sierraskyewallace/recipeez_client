import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CATEGORIES' });
    this.props.dispatch({ type: 'FETCH_RECIPES' });
  }
}

  render () {
    return (
    <div className="App">
      < RecipeList />
      < CategoryList />
    </div>
    

    );
  }
}

export default connect()(App);

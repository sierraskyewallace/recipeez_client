import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
    );
  }
}

export default connect()(App);

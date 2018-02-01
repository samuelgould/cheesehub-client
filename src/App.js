import React, { Component } from 'react';
import './App.css';
import CheeseList from './components/cheese-list'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CheeseList cheeses={this.props.cheeses}/>
      </div>
    );
  }
}

export default App;

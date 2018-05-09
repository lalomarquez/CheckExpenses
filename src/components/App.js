import React, { Component } from 'react'
import '../styles/App.css'
import ListUsers from '../containers/listUsers'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Check Expenses</h1>
        </header>

        <p>hello</p>
        <ListUsers />

      </div>
    );
  }
}

export default App
import React, { Component} from 'react';
import './App.css';
import Header from './components/Header'
import ComponentTest from './components/ComponentTest'
import ToDoApp from './components/ToDoApp'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">

        <Header />
        {/* COMPONENT BELOW IS JUST A BASIC OF HOW USING A COMPONENT WORKS. */}
        <ComponentTest />
        <hr />
        {/* CHECK THE TODO APP IN COMPONENTS FOLDER FOR THE CODE TO THIS APP */}
        <ToDoApp />

      </div>
    );
  }
}

export default App;

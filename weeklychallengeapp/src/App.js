import React, { Component } from 'react';
import './App.css';
import Contact from './ContactList.js';

class App extends Component {
  render() {
    function Header(props) {
      return (
        <div className="header">
          <h1>Hello World, {props.name}</h1>
        </div>
      )
    }
    return (
      <div className="App">
        <Header name="Malik" />
        <Contact
        firstName="Malik"
        lastName="Robinson" phoneNumber="555-555-5555" />
      </div>
    );
  }
}
export default App;

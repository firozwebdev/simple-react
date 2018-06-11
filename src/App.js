import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      keywords: ''
    }
  }

  inputChange(event){
    this.setState({keywords: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world...</h1>
        <button onClick={  () => console.log(this.state.keywords)}>Click me</button>
        <input type="text" onChange={this.inputChange.bind(this)}/>
        <div>{ this.state.keywords }</div>
      </div>
      
    );
  }
}

export default App;

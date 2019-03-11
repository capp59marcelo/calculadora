import React, { Component } from 'react';
import Calculadora from './Componentes/calculadora/Calculadora';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculadora/>
      </div>
    );
  }
}

export default App;

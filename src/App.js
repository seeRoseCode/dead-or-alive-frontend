import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserContainer from './components/UserContainer'
import MapContainer from './components/MapContainer'
import Header from './components/Header'
import Quiz from './components/Quiz'


function App() {





  return (
    <div className="App">
      <header> INSERT SEMANTIC UI HEADER </header>
      <h1> WELCOME TO DEAD OR ALIVE? </h1>
      <img src="https://vignette.wikia.nocookie.net/marvel_dc/images/4/4e/Two-Face_0002.jpg/revision/latest?cb=20110522193536"></img>
      {/* <Quiz />*/}
      <Quiz />
      <footer>
        <p>Created by |T|R|P| </p>
      </footer>
    </div>
  );
}

export default App;

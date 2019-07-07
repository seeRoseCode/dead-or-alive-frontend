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
    <div
    className="App">
      <Header />
      <h1>DEAD OR ALIVE....</h1>
      <Quiz />
    </div>
  );
}

export default App;

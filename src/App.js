import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import BeerList from './components/BeerList';
import SingleBeer from './components/SingleBeer';

import './App.css';


const App = () => {


  return (
    <div className="App">
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/all' element={<BeerList />} />
        <Route path='/:id' element={<SingleBeer />} />
      </Routes>
    </div>

  );
}

export default App;

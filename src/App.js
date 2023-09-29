import { useState, Fragment } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home'

function App() {

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
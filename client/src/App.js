import {useState, useEffect, useRef, React} from 'react';
import {Dropdown, getOption} from './components/Dropdown/Dropdown';
import Admin from './components/Admin/admin.js';
import Home from './components/Dropdown/home.js'

const API_BASE = "http://localhost:3001";
// This line connects this front-end code to the server

const App = () => {

  return (
    <div className="App">
      <Admin />
    </div>
  )
}

export default App;

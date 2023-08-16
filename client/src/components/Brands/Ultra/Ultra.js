import {React, useState, useEffect} from 'react';
import ultraImg from '../../../Images/michelobultra.png';
import './ultra.css'

const API_BASE = "http://localhost:3001";


const Ultra = () => {

    

  return ( 
    <div style={{ backgroundColor: 'black' }}>
        <img class='image' src={ultraImg} alt="Michelob Ultra" />
    </div>

  );
}

export default Ultra;
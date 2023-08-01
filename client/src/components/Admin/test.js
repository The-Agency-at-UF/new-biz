import {React, useState, useEffect} from 'react';
import Home from '../Dropdown/home.js';
import Ultra from '../Brands/Ultra/Ultra.js';

const API_BASE = "http://localhost:3001";


const Test = ({ loggedIn }) => {

    if (loggedIn){
        return (
            <Home />
        )
    }
    else{
        return (
            <Ultra />
        )
    }
}

export default Test;
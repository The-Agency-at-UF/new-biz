import {React, useState, useEffect} from 'react';

const API_BASE = "http://localhost:3001";


const Test = ({ loggedIn }) => {

    if (loggedIn){
        return (
            <div>
                Logged In State
            </div>
        )
    }
    else{
        return (
            <div>
                Not Logged In State
            </div>
        )
    }
}

export default Test;
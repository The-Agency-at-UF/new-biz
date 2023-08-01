import {React, useState, useEffect} from 'react';
import Test from './test.js';

const API_BASE = "http://localhost:3001";


const Admin = () => {
    
    const [userInfo, setUserInfo] = useState([]);

    var [loginUser, setLoginUser] = useState();
    var [passUser, setPassUser] = useState();

    //logged in state or not using props
    const [loggedIn, setLoggedIn] = useState(false);

    //only run once when the component mounts
    useEffect(() => {
        GetUserInfo();
        // console.log(casestudies);
      }, []);

    const GetUserInfo = () => {
        fetch(API_BASE + "/UserInfo")
          .then(res => res.json())
          .then(data => setUserInfo(data))
          .catch(err => console.error("Error: ", err));
    }

    const handleLoginUser = (event) => {
        setLoginUser(event.target.value);
        console.log(loginUser);
    }

    const handleLoginPass = (event) => {
        setPassUser(event.target.value);
        console.log(passUser);
    }

    const handleSubmit=(e)=> { // Once the form has been submitted, this function will post to the backend
        e.preventDefault();
        console.log("Signin form");
        // have a fetch to POST to mongodb
        fetch(API_BASE + "/UserInfo/new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: loginUser, 
                password: passUser
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            GetUserInfo();
        }
        )
    }

    const loginForm = (e) => {
        e.preventDefault();
        console.log("login form");
        
        fetch(API_BASE + "/UserInfo/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: loginUser,
                password: passUser
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.message === "Login successful"){
                alert("Login Successful");
                setLoggedIn(true);
            }
            else{
                alert("Login Not Successful");
                setLoggedIn(false);
            }
            console.log(loggedIn);
            GetUserInfo();
        }
        )
    }

    

  return ( 
    <div>
        <h1>Admin SignUPs</h1>
            <label>
                Username:
                <input required type="text" onChange={handleLoginUser} name="username" />
            </label>
            <label>
                Password:
                <input type="text" onChange={handleLoginPass} name="password" />
            </label>
        <button type="submit" onClick={(e)=>handleSubmit(e)}> SIGN UP </button>
        <button type="submit" onClick={(e)=>loginForm(e)}> Login </button>
        <Test loggedIn={loggedIn}/>
    </div>

    

  );
}

export default Admin;
import React, { useState, useEffect } from 'react';
import { auth, db } from "../../firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; 

function Admin() {
  const [authUser, setAuthUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (authUser) {
      const userId = authUser.uid;
      const userRef = doc(db, "users", userId);
  
      getDoc(userRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setIsAdmin(userData.isAdmin);
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    } else {
      console.log("No user signed in");
    }
  }, [authUser]);
  
  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log("Sign out successful");
      setAuthUser(null);
      navigate('/');
    }).catch((error) => {
      console.log("Error signing out:", error.message);
    });
  }

  return (
    <div>
      <h1>Admin Page</h1>
      {authUser && <p>User ID: {authUser.uid}</p>}
      {isAdmin
        ? <p>You are an admin</p>
        : <p>You do not have Access to this page</p>
    }
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Admin;

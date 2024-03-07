import React, { useState, useEffect } from "react";
import "./Admin.css";
import { auth, db } from "../firebase.config";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import { collection, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

      getDoc(userRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setIsAdmin(userData.isAdmin);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    } else {
      console.log("No user signed in");
    }
  }, [authUser]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Sign out successful");
        setAuthUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error signing out:", error.message);
      });
  };

  // State hooks for each dropdown selection
  const [dropdownOne, setDropdownOne] = useState("");
  const [dropdownTwo, setDropdownTwo] = useState("");
  const [dropdownThree, setDropdownThree] = useState("");

  // Example options for dropdowns (you can replace these with your actual data)
  const optionsOne = ["Option 1", "Option 2", "Option 3"];
  const optionsTwo = ["Option A", "Option B", "Option C"];
  const optionsThree = ["Item X", "Item Y", "Item Z"];

  return (
    <Container
      sx={{
        backgroundColor: "white",
      }}
      component="main"
      maxWidth="sm"
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%", // Ensure the box takes up the full container width
          mt: 2,
          mb: 4, // Adjust margins as needed
        }}
      >
        {isAdmin ? (
          <>
            <Box display="flex" alignItems="center" gap={1}>
              <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
              <Typography sx={{ color: "black" }} variant="h6">
                You are an admin
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Box display="flex" alignItems="center" gap={1}>
              <UnpublishedIcon sx={{ color: "red", fontSize: 20 }} />
              <Typography sx={{ color: "black" }} variant="h6">
                You do not have access to this page
              </Typography>
            </Box>
          </>
        )}
        <Button variant="contained" color="primary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Box>
      {isAdmin ? (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "black", mb: 3 }} variant="h4">
            Dashboard
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="dropdown-one"
                select
                label="Dropdown One"
                value={dropdownOne}
                onChange={(e) => setDropdownOne(e.target.value)}
                variant="outlined"
              >
                {optionsOne.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="dropdown-two"
                select
                label="Dropdown Two"
                value={dropdownTwo}
                onChange={(e) => setDropdownTwo(e.target.value)}
                variant="outlined"
              >
                {optionsTwo.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="dropdown-three"
                select
                label="Dropdown Three"
                value={dropdownThree}
                onChange={(e) => setDropdownThree(e.target.value)}
                variant="outlined"
              >
                {optionsThree.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignOut}
                sx={{ mt: 5 }}
              >
                Generate link
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "black", mb: 3 }}>
            Dashboard
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="dropdown-one"
                select
                label="Dropdown One"
                value={dropdownOne}
                onChange={(e) => setDropdownOne(e.target.value)}
                variant="outlined"
              >
                {optionsOne.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="dropdown-two"
                select
                label="Dropdown Two"
                value={dropdownTwo}
                onChange={(e) => setDropdownTwo(e.target.value)}
                variant="outlined"
              >
                {optionsTwo.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="dropdown-three"
                select
                label="Dropdown Three"
                value={dropdownThree}
                onChange={(e) => setDropdownThree(e.target.value)}
                variant="outlined"
              >
                {optionsThree.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Admin;

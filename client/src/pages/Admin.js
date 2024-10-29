import React, { useState, useEffect } from "react";
import "./Admin.css";
import { auth, db } from "../firebase.config";
import {
  Button,
  CssBaseline,
  TextField,
  List,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [authUser, setAuthUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [caseStudies, setCaseStudies] = useState([]);

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
            console.log("User doesn't EXIST!?");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      const fetchCaseStudies = async () => {
        const querySnapshot = await getDocs(collection(db, "casestudy"));
        const caseStudyList = [];
        querySnapshot.forEach((doc) => {
          // Assuming each document has a 'name' field you want to display
          caseStudyList.push({ id: doc.id, company: doc.data().company });
        });
        setCaseStudies(caseStudyList);
      };

      fetchCaseStudies().catch(console.error);
    } else {
      console.log("No user signed in");
    }
  }, [authUser, caseStudies]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!authUser || !isAdmin) {
      console.log("Unauthorized attempt to submit data");
      return;
    }
    // check if the company is empty
    // format company to all lowercase

    const caseStudyRef = doc(db, "casestudy", company.toLowerCase());

    const caseStudyData = {
      userId: authUser.uid, // Include the user's UID for reference
      company: company.toLowerCase(),
      caseStudies: [
        dropdownOne.toLowerCase(),
        dropdownTwo.toLowerCase(),
        dropdownThree.toLowerCase(),
      ],
    };

    setDoc(caseStudyRef, caseStudyData)
      .then(() => {
        console.log("Submission successfully saved!");
        // Here you can add any follow-up actions after successful submission,
        // such as redirecting the user or showing a success message
      })
      .catch((error) => {
        console.error("Error saving submission: ", error);
      });
  };

  const handleDeleteLink = async (docName) => {
    try {
      // Assuming docName is the document's ID
      const docRef = doc(db, "casestudy", docName);

      // Delete the document
      await deleteDoc(docRef);

      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(text);
        alert("Text copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    } else {
      console.error("Clipboard not available");
    }
  };

  // State hooks for each dropdown selection
  const [dropdownOne, setDropdownOne] = useState("");
  const [dropdownTwo, setDropdownTwo] = useState("");
  const [dropdownThree, setDropdownThree] = useState("");
  const [company, setCompany] = useState("");

  // Example options for dropdowns (you can replace these with your actual data)
  const optionsOne = ["Uber", "Amazon", "Google", "Michelob", "Test"];
  const optionsTwo = ["Uber", "Amazon", "Google", "Michelob", "Test"];
  const optionsThree = ["Uber", "Amazon", "Google", "Michelob", "Test"];

  return (
    <Container
      sx={{
        backgroundColor: "white",
      }}
      component="main"
      maxWidth="lg"
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
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
            gap: 4, // Adjust this value as needed
          }}
        >
          <Typography sx={{ color: "black", mb: 3 }} variant="h4">
            Dashboard
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Changed to column for a vertical layout of the Grids
              gap: 15, // You can also add gap here if you want space between Grids inside this Box
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Changed to column for a vertical layout of the Grids
                alignItems: "center",
                gap: 2, // You can also add gap here if you want space between Grids inside this Box
              }}
            >
              <Grid sx={{ width: "100%", maxWidth: 500 }} container spacing={2}>
                <Grid item xs={12}>
                  <Typography sx={{ color: "black", mb: 3 }} variant="h5">
                    Generate link
                  </Typography>
                  <TextField
                    fullWidth
                    id="company"
                    label="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="dropdown-one"
                    select
                    label="Case Study 1"
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
                    label="Case Study 2"
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
                    label="Case Study 3"
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
                    onClick={handleSubmit}
                    sx={{ mt: 5 }}
                  >
                    Generate
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: "300px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography sx={{ color: "black", mb: 3, textAlign: "center" }} variant="h5">
                    Active links
                  </Typography>
                  <List id="admin-list">
                    {caseStudies.length !== 0 ? (
                      caseStudies.map((caseStudy, index) => (
                        <ListItem
                          key={index}
                          sx={{ color: "black", mb: 1 }}
                          secondaryAction={
                            <IconButton
                              onClick={() =>
                                handleDeleteLink(caseStudy.company)
                              }
                              edge="end"
                              aria-label="delete"
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <IconButton
                              onClick={() =>
                                copyTextToClipboard(
                                  `http://localhost:3001/${caseStudy.company}`
                                )
                              }
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              caseStudy.company.charAt(0).toUpperCase() +
                              caseStudy.company.slice(1)
                            }
                          />
                        </ListItem>
                      ))
                    ) : (
                      <Typography sx={{ color: "black" }}>
                        No active links
                      </Typography>
                    )}
                  </List>
                </Grid>

                <Grid item xs={12}></Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      )}
    </Container>
  );
}

export default Admin;

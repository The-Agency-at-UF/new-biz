import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
const API_BASE = "http://localhost:3001";
// This line connects this front-end code to the server

const App = () => {
  const [casestudies, setCaseStudies] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    GetCaseStudies();
    // console.log(casestudies);
  }, []);

  const GetCaseStudies = () => {
    fetch(API_BASE + "/CaseStudies")
      .then((res) => res.json())
      .then((data) => setCaseStudies(data))
      .catch((err) => console.error("Error: ", err));
  };

  const DeleteData = async () => {
    try {
      const response = await fetch(API_BASE + "/CaseStudies");
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelection = (order, selectedValue) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [order]: selectedValue, // key: order, value: selectedValue
    }));
  };

  const loadNewSite = async () => {
    // Get values inside dropdowns | complete: selected values
    console.log(selectedValues);
    await DeleteData();
    // Post these values with assigned order value to the database
    // Load a new webpage
    // Use selected values to style the new webpage
  };

  return (
    <div className="App">
      <Home></Home>
      {/*
       <h1>Welcome</h1>
      <h2>Case Studies</h2>
      <h4>Case Study 1:</h4>
      <Dropdown order="1" handleSelection={handleSelection} />
      <h4>Case Study 2:</h4>
      <Dropdown order="2" handleSelection={handleSelection} />
      <h4>Case Study 3:</h4>
      <Dropdown order="3" handleSelection={handleSelection} />
      <button onClick={loadNewSite}>Load New Site!</button>

       <div className= "todos">
        {casestudies.map(todo => (
          <div className = {
            "todo" + (todo.complete ? "is-complete" : "")
          } key = {todo._id} onClick = {() => completeTodo(todo._id)}>
              <div className="checkbox"></div>

              <div className="text">{ todo.text }</div>

              <div className = "delete-todo">x</div>
          </div>
        ))}
      </div> 
        */}
    </div>
  );
};

export default App;

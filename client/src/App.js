import {useState, useEffect, useRef } from 'react';
import {Dropdown, getOption} from './Dropdown/Dropdown';
import Admin from './Admin/admin.js';

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
      .then(res => res.json())
      .then(data => setCaseStudies(data))
      .catch(err => console.error("Error: ", err));
  }
  
  const DeleteData = async () => {
    try {
      const response = await fetch(API_BASE + "/CaseStudies");
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelection = (order, selectedValue) => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      [order]: selectedValue // key: order, value: selectedValue
    }));
  }

  const loadNewSite = async () => {
    // Get values inside dropdowns | complete: selected values
    console.log(selectedValues);
    await DeleteData();
    // Post these values with assigned order value to the database
    // Load a new webpage
    // Use selected values to style the new webpage
  }


  return (
    <Admin />
  );
}

export default App;

import {useState, useEffect, useRef } from 'react';
import {Dropdown, getOption} from './Dropdown.js';

const API_BASE = "http://localhost:3001";


const Home = () => {const [casestudies, setCaseStudies] = useState([]);
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
    <div>
      <h1>Welcome</h1>
      <h2>Case Studies</h2>
      <h4>Case Study 1:</h4>
      <Dropdown order = "1" handleSelection={handleSelection}/>
      <h4>Case Study 2:</h4>
      <Dropdown order = "2" handleSelection={handleSelection}/>
      <h4>Case Study 3:</h4>
      <Dropdown order = "3" handleSelection={handleSelection}/>
      <button onClick={loadNewSite}>Load New Site!</button>
    </div>

    

  );
}

export default Home;
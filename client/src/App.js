import {useState, useEffect, useRef, React} from 'react';
import {Dropdown, getOption} from './Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import Brands from './Brands';

const API_BASE = "http://localhost:3001";
// This line connects this front-end code to the server

const App = () => {
  const [casestudies, setCaseStudies] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  const navigate = useNavigate();

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

  const toNewSite = async () => {
    // Get values inside dropdowns | complete: selected values
    console.log(selectedValues);

    //navigate to new webpage and pass over the selected values
    navigate('/brands',{state:{brand1: selectedValues["1"], brand2: selectedValues["2"], brand3: selectedValues["3"]}})
    
    await DeleteData();
  }

  return (
    <div className="App">

      <h1>Welcome</h1>
      <h2>Case Studies</h2>
      <h4>Case Study 1:</h4>
      <Dropdown order = "1" handleSelection={handleSelection}/>
      <h4>Case Study 2:</h4>
      <Dropdown order = "2" handleSelection={handleSelection}/>
      <h4>Case Study 3:</h4>
      <Dropdown order = "3" handleSelection={handleSelection}/>
      <button onClick={()=>{toNewSite()}}>Load New Site!</button>

    </div>
  );
}

export default App;

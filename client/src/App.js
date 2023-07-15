import {useState, useEffect, useRef, React} from 'react';
import {Dropdown, getOption} from './Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const API_BASE = "http://localhost:3001";
// This line connects this front-end code to the server

const App = () => {
  const [casestudies, setCaseStudies] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    GetCaseStudies();
  }, []);

  const GetCaseStudies = () => {
    fetch(API_BASE + "/CaseStudies")
      .then(res => res.json())
      .then(data => setCaseStudies(data))
      .catch(err => console.error("Error: ", err));
  }

  const handleSelection = (order, selectedValue) => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      [order]: selectedValue // key: order, value: selectedValue
    }));
  }

  // post selected case studies
  const postCaseStudy = async (caseStudyOrder) => {
    const data = await fetch(API_BASE + '/CaseStudy/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order: caseStudyOrder,
        text: selectedValues[caseStudyOrder]
      })
    }).then(res => res.json);

    console.log(data)
  }

  const toNewSite = async () => {
    // Get values inside dropdowns | complete: selected values
    console.log(selectedValues);

    //post each case studies
    for (let i in selectedValues) {
      postCaseStudy(i);
    }

    //navigate to new webpage
    navigate('/CaseStudies')
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

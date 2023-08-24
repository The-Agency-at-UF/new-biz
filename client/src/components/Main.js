import {useState, useEffect, useRef, React} from 'react';
import { useNavigate } from "react-router-dom";
import Uber from './Brands/CaseStudies/Uber'
import Bliss from './Brands/CaseStudies/Bliss'
import Monday from "./Brands/CaseStudies/Monday";
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Team from './Team/Team';


const API_BASE = "http://localhost:3001";

// This page loads the case studies from the database and exports them to the page in the specified order

const Main = () => {
    let [casestudies, setCaseStudies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetCaseStudies();
        console.log(casestudies);
    }, []);
    
    const GetCaseStudies = () => {
    fetch(API_BASE + "/CaseStudies")
        .then(res => res.json())
        .then(data => setCaseStudies(data))
        .catch(err => console.error("Error: ", err));
    }

    const orderCaseStudies = () => {
        const orderedCaseStudies = [...casestudies].sort((a, b) => a.order - b.order);
        console.log(orderedCaseStudies);
        casestudies = orderedCaseStudies
    }

    const DeleteAllData = async () => {
        try {
            const response = await fetch(API_BASE + '/CaseStudies/deleteAll', {
                method: 'DELETE',
            });
            const data = await response.json();
            setCaseStudies([]);
            console.log(data); // Optional: Log the server response
        } catch (error) {
            console.error('Error deleting all data:', error);
        }
    };

    const CallBrands = (props) => {
        console.log(casestudies)

        if (casestudies[props.order] !== undefined) {
            if (casestudies[props.order].text  === "Uber") {
                return (
                    <Uber />
                )
            } else if (casestudies[props.order].text  === "Bliss") {
                return (
                    <Bliss />
                )
            } else if (casestudies[props.order].text  === "Monday") {
                return (
                    <Monday />
                )
            }
        }
    }
    
    const goBack = async () => {
        //delete all casestudies
        // for (let i in casestudies) {
        //     DeleteData(casestudies[i]._id)
        // };

        DeleteAllData();
        
        //navigate back to home page
        navigate('/')
    }


    return (
        <div>
            <div>
                <Intro/>
                <Services/>
                <Team/>
            </div>
            {orderCaseStudies()}
            <div>
                <button onClick={()=>{goBack()}}>Go back and delete data</button>
            </div>
            <CallBrands order={"0"}/>
            <CallBrands order={"1"}/>
            <CallBrands order={"2"}/>
        </div>
        
    )
}

export default Main;

import {useState, useEffect, useRef, React} from 'react';
import { useNavigate } from "react-router-dom";
import Uber from './CaseStudies/Uber'
import Bliss from './CaseStudies/Bliss'
import Monday from "./CaseStudies/Monday";

const API_BASE = "http://localhost:3001";

const Brands = () => {
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

    const DeleteData = async id => {
        const data = await fetch(API_BASE + '/CaseStudy/delete/' + id, { method: "DELETE" }).then(res => res.json());
        setCaseStudies(casestudies => casestudies.filter(casestudy => casestudy._id !== data.result._id));
    }

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
        for (let i in casestudies) {
            DeleteData(casestudies[i]._id)
        };
        
        //navigate back to home page
        navigate('/')
    }


    return (
        <div>
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

export default Brands;

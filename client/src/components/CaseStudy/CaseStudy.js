import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import { db } from "../../firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";


const CaseStudy = () => {
    const { caseStudyId } = useParams();

    //array of case studies names
    // const caseStudies = ["test1", "test2", "test3"];
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const fetchCase = async() => {
            const caseRef = doc(db, `casestudy/${caseStudyId}`);
            const docSnap = await getDoc(caseRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());

                await setCases(docSnap.data().case);
            }
            else {
                console.log("No such document!");
            }
            console.log(cases);
        }
        fetchCase();
    }, [caseStudyId]);


    return (
        <div>
            <h1>CASE STUDY</h1>
            {cases.includes('Test1') && <Test1 />}
            {cases.includes('Test2') && <Test2 />}
            {cases.includes('Test3') && <Test3 />}
        </div>

    );
}

export default CaseStudy;
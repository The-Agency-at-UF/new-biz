import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

// import all case study components/pages
import { db } from "../../firebase.config";
import { doc, getDoc } from "firebase/firestore";

const CaseStudy = () => {
  const { caseStudyId } = useParams();

  const [caseStudies, setCaseStudies] = useState([]);

  // list of all available case studies ready to render
  // key must match what is in the database
  const caseStudyTags = {
    test1: Test1,
    test2: Test2,
    test3: Test3,
  };

  useEffect(() => {
    const fetchCase = async () => {
      const caseRef = doc(db, "casestudy", caseStudyId);
      const docSnap = await getDoc(caseRef);

      if (docSnap.exists()) {
        setCaseStudies(docSnap.data().caseStudies);
      } else {
        // handle url not pointing to document in DB
        console.log("No such document!");
      }
    };
    fetchCase();
  }, [caseStudyId]);

  return (
    <div>
      <h1>CASE STUDY</h1>
      {caseStudies.map((caseName, index) => {
        const SpecificCaseStudy = caseStudyTags[caseName];
        return SpecificCaseStudy ? <SpecificCaseStudy key={index} /> : null;
      })}
    </div>
  );
};

export default CaseStudy;

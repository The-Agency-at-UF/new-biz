import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Amazon from "./Amazon";
import Google from "./Google";
import Uber from "../../case-studies/Uber/Uber";
import Test from "./Test";
import Michelob from "./Michelob";
import Alexa from "../../case-studies/Alexa/Alexa";
import Home from "../../../src/pages/Home";

// import all case study components/pages
import { db } from "../../firebase.config";
import { doc, getDoc } from "firebase/firestore";

const CaseStudy = () => {
  const { caseStudyId } = useParams();

  const [caseStudies, setCaseStudies] = useState([]);
  const [caseStudySections, setCaseStudySections] = useState([]);

  // list of all available case studies ready to render
  // key must match what is in the database
  const caseStudyTags = {
    google: Google,
    michelob: Alexa,
    test: Test,
    uber: Uber,
    amazon: Alexa,
  };

  useEffect(() => {
    console.log("LOOP");
    const fetchCase = async () => {
      const caseRef = doc(db, "casestudy", caseStudyId);
      const docSnap = await getDoc(caseRef);

      if (docSnap.exists()) {
        setCaseStudies(docSnap.data().caseStudies);
        // Assuming your case studies have sections like "section1", "section2", etc.
        const sections = docSnap
          .data()
          .caseStudies.map((caseStudy, index) => `section${index + 1}`);
        setCaseStudySections(sections);
      } else {
        // handle url not pointing to document in DB
        console.log("No such document!");
      }
    };
    fetchCase();
  }, [caseStudyId]);

  return (
    <div>
      <Home />
      <h1>CASE STUDY</h1>
      {caseStudySections.map((section, index) => {
        const SpecificCaseStudy = caseStudyTags[caseStudies[index]];
        return SpecificCaseStudy ? (
          <div id={section} key={index}>
            <SpecificCaseStudy />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default CaseStudy;

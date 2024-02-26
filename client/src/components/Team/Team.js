import React, { useState } from "react";
import Background1 from "../../images/blob.png";
import Natalie from '../../images/natalie.png';
import NatalieCompany from '../../images/NatalieCompany.png';
import Ashley from '../../images/ashley.png';
import AshleyCompany from '../../images/ashleycompany.png';
import AshleyBackground from '../../images/ashleybackground.png';


import "./Team.css";

const Team = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

//   const imageToShow = isHovered ? Background2 : Background1;

  return (
    <div className="whole-container">
      <div className="border-container">
        <div
          className="team-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <img src={Natalie} className="person" />
      
          <img
            src={Background1}
            alt="Hoverable Image"
            className="hoverable-image"
          />
          <div className="text-container">
            <div className="name-text">
              NATALIE <br></br>
              ASOREY
            </div>
            <div className="title-text">
              Associate Director, <br></br>
              Student Engagement
            </div>
            <div className="about-text">
              Natalie was most recently head of social media at <br></br>
              BODEN, a leading cross-cultural communication<br></br>
              agency based in Miami, where she oversaw the <br></br>
              McDonald’s USA scope of work as Hispanic agency <br></br>
              of record.
            </div>
            <div className="image-container">
                <img
                src={NatalieCompany}
                />
            </div>
          </div>
        </div>
      </div>

      <div className="border-container">
        <div
          className="team-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <img src={Ashley} className="person" />
      
          <img
            src={AshleyBackground}
            alt="Hoverable Image"
            className="hoverable-image"
          />
          <div className="text-container">
            <div className="name-text">
              ASHLEY <br></br>
              SEPULVERES
            </div>
            <div className="title-text">
              Accounts and Operations, <br></br>
              Supervisor
            </div>
            <div className="about-text">
              A recent gator grad, Ashley is in her final semester<br></br>
              of her Master of International Business at UF. She<br></br>
              was formerly an operations manager and account<br></br>
              supervisor at The Agency, as well as a strategy<br></br>
              intern at Tiktok.
            </div>
            <div className="image-container">
                <img
                src={AshleyCompany}
                />
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
    
  );
};

export default Team;

// import React, { useState, useEffect } from "react";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../firebase";
// import "./Team.css";


// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const teamCollection = collection(db, "teamMembers");
//         const teamQuery = query(teamCollection);
//         const teamSnapshot = await getDocs(teamQuery);
//         const members = [];

//         teamSnapshot.forEach((doc) => {
//           const memberData = doc.data();
//           members.push(memberData);
//         });

//         setTeamMembers(members);
//       } catch (error) {
//         console.error("Error fetching team member data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="whole-container">
//       {teamMembers.map((member, index) => (
//         <div key={index} className="border-container">
//           <div
//               className="team-container"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//           >
//             <img src={member.personImageUrl} className="person" />

//             <img
//               src={member.backgroundImageUrl}
//               alt="Hoverable Image"
//               className="hoverable-image"
//             />
//             <div className="text-container">
//               <div className="name-text">
//                 {member.name}
//               </div>
//               <div className="title-text">
//                 {member.title}
//               </div>
//               <div className="about-text">
//                 {member.description}
//               </div>
//               <div className="image-container">
//                 <img src={member.companyBackgroundImageUrl} />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Team;

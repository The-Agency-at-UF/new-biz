import React, { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";
import "./Team.css";


const NewTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamCollection = collection(db, "teamMembers");
        const teamQuery = query(teamCollection, orderBy("order"));
        const teamSnapshot = await getDocs(teamQuery);
        const members = [];

        teamSnapshot.forEach((doc) => {
          const memberData = doc.data();
          members.push(memberData);
        });

        setTeamMembers(members);
      } catch (error) {
        console.error("Error fetching team member data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="whole-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="border-container">
          <div
              className="team-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          >
            <img src={member.personImageUrl} className="person" />

            <img
              src={member.backgroundImageUrl}
              alt="Hoverable Image"
              className="hoverable-image"
            />
            <div className="text-container">
              <div className="name-text">
                {member.name}
              </div>
              <div className="title-text">
                {member.title}
              </div>
              <div className="about-text">
                {member.description}
              </div>
              <div className="image-container">
                <img src={member.companyBackgroundImageUrl} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewTeam;

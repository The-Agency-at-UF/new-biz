import React, { useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, getCountFromServer} from "firebase/firestore";
import { storage, db } from "../../firebase.config";
import { v4 } from "uuid";
import "./TeamAdmin.css";

const TeamAdmin = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [personImage, setPersonImage] = useState(null);
  const [companyBackgroundImage, setCompanyBackgroundImage] = useState(null);
  

  const handleBackgroundImageChange = (event) => {
    setBackgroundImage(event.target.files[0]);
  };

  const handlePersonImageChange = (event) => {
    setPersonImage(event.target.files[0]);
  };

  const handleCompanyBackgroundImageChange = (event) => {
    setCompanyBackgroundImage(event.target.files[0]);
  };

  const uploadImagesToStorage = async () => {
    let backgroundImageUrl = "";
    let personImageUrl = "";
    let companyBackgroundImageUrl = "";

    //tryna get order number so that the memebrs are in order
    const coll = collection(db, "teamMembers");
    const snapshot = await getCountFromServer(coll);
    const order = snapshot.data().count + 1;

    console.log("Orderrrrr");
    console.log(order);



    if (backgroundImage && personImage && companyBackgroundImage) {
      // Upload background image
      const backgroundName = `background_${v4()}`;
      const backgroundRef = ref(storage, `images/${backgroundName}`);
      const backgroundSnapshot = await uploadBytes(backgroundRef, backgroundImage);
      backgroundImageUrl = await getDownloadURL(backgroundSnapshot.ref);
  
      // Upload person image
      const personName = `person_${v4()}`;
      const personRef = ref(storage, `images/${personName}`);
      const personSnapshot = await uploadBytes(personRef, personImage);
      personImageUrl = await getDownloadURL(personSnapshot.ref);
  
      // Upload company background image
      const companyBackgroundName = `company_background_${v4()}`;
      const companyBackgroundRef = ref(storage, `images/${companyBackgroundName}`);
      const companyBackgroundSnapshot = await uploadBytes(companyBackgroundRef, companyBackgroundImage);
      companyBackgroundImageUrl = await getDownloadURL(companyBackgroundSnapshot.ref);
  
      console.log("FINISH");
      console.log(companyBackgroundImageUrl, personImageUrl, backgroundImageUrl);
  
      const docRef = await addDoc(collection(db, "teamMembers"), {
        name,
        title,
        description,
        backgroundImageUrl,
        personImageUrl,
        companyBackgroundImageUrl,
        order,
      });
  
      await console.log("Document written with ID: ", docRef.id);
      setName("");
      setTitle("");
      setDescription("");
      setBackgroundImage(null);
      setPersonImage(null);
      setCompanyBackgroundImage(null);
    }
  };
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Upload images and get URLs
    uploadImagesToStorage();

 
  };

  return (
    <div className="admin-container">
      <form className="admin-form" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
        <label htmlFor="backgroundImage">Background Image</label>
        <input
          id="backgroundImage"
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageChange}
        />
  
        <label htmlFor="personImage">Person Image</label>
        <input
          id="personImage"
          type="file"
          accept="image/*"
          onChange={handlePersonImageChange}
        />
  
        <label htmlFor="companyBackgroundImage">Company Background Image</label>
        <input
          id="companyBackgroundImage"
          type="file"
          accept="image/*"
          onChange={handleCompanyBackgroundImageChange}
        />
  
        <button type="submit">Upload and Save</button>
      </form>
    </div>
  );
};

export default TeamAdmin;

import React, { useState } from "react";
import styles from "./Demographic.module.css";

const Demographic = () => {
const [gender, setGender] = useState([]);
const [ethnicity, setEthnicity] = useState("");
const [international_student, setInternational] = useState([]);
const [age_range, setAge] = useState("");
const [transferred_from, setTransferred] = useState("");
const [first_gen_student, setFirstGen] = useState([]);



const handleGenderChange = (event) => {
const selectedGenders = Array.from(event.target.selectedOptions, (option) => option.value);
setGender(selectedGenders);
};

const handleEthnicityChange = (event) => {
setEthnicity(event.target.value);
};

const handleInternationalChange = (event) => {
  const selectedInternational = Array.from(event.target.selectedOptions, (option) => option.value);
  setInternational(selectedInternational);
};

const handleAgeChange = (event) => {
  setAge(event.target.value);
};

const handleTransferredChange = (event) => {
  const selectedTransferred = Array.from(event.target.selectedOptions, (option) => option.value);
  setTransferred(selectedTransferred);
};

const handleFirstGenChange = (event) => {
  const selectedFirstGen = Array.from(event.target.selectedOptions, (option) => option.value);
  setFirstGen(selectedFirstGen);
};

const handleSubmit = (event) => {
  event.preventDefault();

 fetch('http://localhost:5000/demographics', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        international_student: international_student,
        age_range: age_range,
        transferred_from: transferred_from,
        gender: gender,
        first_gen_student: first_gen_student,
        ethnicity: ethnicity,
    })
    
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
  });
}
return (
<div className={styles.demographic}>
<div className={styles.menusidebar}>
<div className={styles.menusidebarChild} />
<img className={styles.menusidebarItem} alt="" src="/rectangle-3.svg" />
<div className={styles.profileButton}>
<div className={styles.profile}>Profile</div>
<div className={styles.profileIcon}>
<div className={styles.profileIconChild} />
<div className={styles.profileIconItem} />
<div className={styles.profileIconInner} />
</div>
</div>
<div className={styles.settingsButton}>
<div className={styles.settings}>Settings</div>
<div className={styles.settingsIcon}>
<div className={styles.settingsIconChild} />
<div className={styles.settingsIconItem} />
<div className={styles.settingsIconInner} />
</div>
</div>
<div className={styles.logOutButton}>
<div className={styles.logOut}>Log out</div>
<img className={styles.logoutIcon} alt="" src="/logout-icon.svg" />
</div>
<div className={styles.neiuDemographicInformationContainer}>
<p className={styles.neiuDemographicInformation}>
NEIU Demographic Information
</p>
</div>
</div>

php

  <div className={styles.formContainer}>
    <form action="/demographics" method="post" className={styles.sampleForm}>
      <div className={styles.demographics}>
        <ul>
          <li>
            <label htmlFor="international_student">
                     <br />
      <br />
            </label>
            <select 
    id="international_student" 
    name="international_student"
    value={international_student} // Bind state variable
    onChange={handleInternationalChange} // Bind event handler
>
    <option value="">Select your student status</option>
    <option value="international">International student</option>
    <option value="domestic">Domestic student</option>
</select>
          </li>
          <li>
            <label htmlFor="age_range">               <br />
      <br /></label>
      <select 
    id="age_range" 
    name="age_range"
    value={age_range} // Bind state variable
    onChange={handleAgeChange} // Bind event handler
>
    <option value="">Select your age range</option>
    <option value="18-24">18-24</option>
    <option value="25-34">25-34</option>
    <option value="35-44">35-44</option>
    <option value="45-54">45-54</option>
    <option value="55+">55+</option>
</select>
          </li>
          <li>
            <label htmlFor="transferred_from">
                           <br />
      <br />
            </label>
            <select 
    id="transferred_from" 
    name="transferred_from"
    value={transferred_from} // Bind state variable
    onChange={handleTransferredChange} // Bind event handler
>
    <option value=""> Select your transfer method </option>
    <option value="two_year"> From Two-year college</option>
    <option value="four_year">Four-year college</option>
</select>
          </li>
         
          <li>
            <label htmlFor="gender">
                     <br />
      <br />
            </label>
            <select 
    id="gender" 
    name="gender"
    value={gender} // Bind state variable
    onChange={handleGenderChange} // Bind event handler
>
    <option value="">Select your gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Transgender">Transgender</option>
    <option value="Non-binary">Non-binary</option>
    <option value="Genderqueer">Genderqueer</option>
    <option value="Genderfluid">Genderfluid</option>
    <option value="Agender">Agender</option>
    <option value="Intersex">Intersex</option>
    <option value="Prefer not to say">Prefer not to say</option>
    <option value="other">other</option>
</select>
          </li>
          <li>
            <label htmlFor="first_gen_student">
                          <br />
      <br />
            </label>
            <select 
    id="first_gen_student" 
    name="first_gen_student"
    value={first_gen_student} // Bind state variable
    onChange={handleFirstGenChange} // Bind event handler
>
    <option value="">Select your first generation status</option>
    <option value="yes">Yes, First Gen</option>
    <option value="no">No, not First Gen</option>
</select>
          </li>
          <li><p> ethnicity </p></li>
          <li>
          <label htmlFor="ethnicity">               <br />
      <br /></label>
            <select
              id="ethnicity"
              name="ethnicity"
              value={ethnicity}
              onChange={handleEthnicityChange}
            >
              <option value="">  </option>
              <option value="asian">Asian</option>
              <option value="African American">African American</option>
              <option value="hispanic">Hispanic</option>
              <option value="Caucasian">Caucasian</option>
              <option value="other">Other</option>
            </select>
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</div>

);
};

export default Demographic;
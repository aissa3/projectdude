import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAccount.module.css";
import axios from 'axios';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await axios.post('http://localhost:5000/register', {
      fname: firstName,
      lname: lastName,
      email: email,
      password
    });
    if (response.data.status === 'ok') {
      navigate("/login");
    } else {
      alert(response.data.error);
    }
  };

  return (
    <div className={styles.createaccount}>
      <div className={styles.createaccountChild} />
      <div className={styles.createaccountItem} />
      <div className={styles.createaccountInner} />
      <div className={styles.neiu}>NEIU</div>
      <form className={styles.loginGroup} onSubmit={handleSubmit}>
        <div className={styles.loginGroupChild} />
        <input className={styles.firstName} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input className={styles.lastName} placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input className={styles.username} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className={styles.password} placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input className={styles.reTypePassword} placeholder="Re-type Password" type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required />
        <button className={styles.loginButton} type="submit">Create</button>
      </form>
     
    </div>
  );
};

export default CreateAccount;

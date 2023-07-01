import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCreateAccountTextClick = useCallback(() => {
    navigate("/createaccount");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgotpassword");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/login-user', {
      email: email,
      password
    });
    if (response.data.status === 'ok') {
      // sucessful login
      navigate("/Landing");
    } else {
      alert(response.data.error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.loginItem} />
      <div className={styles.loginInner} />
      <div className={styles.neiu}>NEIU</div>
      <form className={styles.loginGroup} onSubmit={handleSubmit}>
        <div className={styles.loginGroupChild} />
        <input className={styles.username} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className={styles.password} placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className={styles.loginButton} type="submit">Login</button>
      </form>
      <div className={styles.createAccountText} onClick={onCreateAccountTextClick}>
        <div className={styles.createAccountTextChild} />
        <button className={styles.createAccount} type="submit">Create Account </button>
     

      </div>
      <div className={styles.forgotPasswordText} onClick={onForgotPasswordTextClick}>
        <div className={styles.forgotPasswordTextChild} />
        <button className={styles.forgotPassword} type="submit">Forgot password</button>
      </div>
    </div>
  );
};

export default Login;

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";
import axios from "axios"; 
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const confirmation = window.confirm("If you have registered with us you will receive a reset link shortly, click confirm to continue. ");
    if (confirmation) {
      try {
        const response = await axios.post('http://localhost:5000/ForgotPassword', {
          email
        });

        if (response.data.status === 'ok') {
          setMessage('Email with reset password link sent successfully.');
          setError('');
        } else {
          setError('Something went wrong. Please try again.');
          setMessage('');
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        setError('Failed to send request. Please check your network connection and try again.');
        setMessage('');
      }
    }
  };  
  return (
    <div className={styles.forgotpassword}>
      <div className={styles.forgotpasswordChild} />
      <div className={styles.forgotpasswordItem} />
      <div className={styles.forgotpasswordInner} />
      <div className={styles.neiu}>NEIU</div>
      <div className={styles.loginGroup}>
        <div className={styles.loginGroupChild} />
        <b className={styles.email}>Email:</b>
        
        
<b className={styles.passwordReset}>Password Reset</b>
        <div className={styles.loginGroupItem}> <input
          id="email"
          type="email"
          className={styles.emailInput}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /></div>
      </div>
      <button className={styles.loginButton} onClick={handleForgotPassword}>
       Send Email
        
      </button>
      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
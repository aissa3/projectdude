import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewPassword.module.css";
const NewPassword = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.newpassword}>
      <div className={styles.newpasswordChild} />
      <div className={styles.newpasswordItem} />
      <div className={styles.newpasswordInner} />
      <div className={styles.neiu}>NEIU</div>
      <div className={styles.loginGroup}>
        <div className={styles.loginGroupChild} />
        <b className={styles.confirmPassword}>Confirm Password:</b>
        <b className={styles.newPassword}>New Password:</b>
        <div className={styles.loginGroupItem} />
        <div className={styles.loginGroupInner} />
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.loginButtonChild} />
        <b className={styles.reset}>
          <p className={styles.blankLine}>Reset</p>
        </b>
      </div>
      <div className={styles.text} />
      <div className={styles.passwordCriteriaMustContainer}>
        <p className={styles.passwordCriteria}>
          <b>Password Criteria</b>
        </p>
        <p className={styles.blankLine}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.blankLine}> Must be 8-12 characters</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          {" "}
          Must have at least one number and special character
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          {" "}
          Must not contain personal information
        </p>
      </div>
    </div>
  );
};

export default NewPassword;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Personality.module.css";
const Personality = () => {
  const navigate = useNavigate();

  const onTakeExamContainerClick = useCallback(() => {
    window.open("https://www.16personalities.com/");
  }, []);

  const onResultOptionClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.personality}>
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
      </div>
      <div className={styles.neiu}>NEIU</div>
      <div className={styles.takeexam} onClick={onTakeExamContainerClick}>
        <div className={styles.takeexamChild} />
        <div className={styles.takeExam}>Take Exam</div>
      </div>
      <div className={styles.resultsSelection}>
        <div className={styles.resultOption} onClick={onResultOptionClick} />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      </div>
    </div>
  );
};

export default Personality;

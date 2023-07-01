import { useCallback, useContext } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";



const LandingPage = () => {
  const navigate = useNavigate();
  

  const onRectangle1Click = useCallback(() => {
    navigate("/questionare");
  }, [navigate]);

  const onCompDemoClick = useCallback(() => {
    navigate("/demographic");
  }, [navigate]);

  const onCompPersClick = useCallback(() => {
    navigate("/personality");
  }, [navigate]);

  return (
    <div className={styles.landingpage}>
      <div className={styles.landingpageChild} />
      <div className={styles.landingpageItem} onClick={onRectangle1Click} />
      <div className={styles.landingpageInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.landingpageChild1} />
      <div className={styles.landingpageChild2} />
      <div className={styles.computerScience}>{`Computer Science `}</div>
      <div className={styles.landingpageChild3} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.johnDoe}>John Doe</div>
      <div className={styles.menusidebar}>
        <div className={styles.menusidebarChild} />
        <img className={styles.menusidebarItem} alt="" src="/rectangle-3.svg" />
        <Button
          className={styles.profileButton}
          sx={{ width: 66 }}
          variant="text"
          color="primary"
        >
          Profile
        </Button>
        <Button
          className={styles.settingsButton}
          sx={{ width: 82 }}
          variant="text"
          color="primary"
        >
          Settings
        </Button>
        <Button
          className={styles.logOutButton}
          sx={{ width: 76 }}
          variant="text"
          color="primary"
        >
          Log out
        </Button>
      </div>
      <div className={styles.checklist} />
      <div className={styles.landingpageChild4} />
      <div className={styles.neiu}>NEIU</div>
      <div className={styles.checkList}>Check List</div>
      <Link
        className={styles.compdemo}
        to="/demographic"
        onClick={onCompDemoClick}
      >
        <div className={styles.compdemoChild} />
        <div className={styles.completeDemographicInfo}>
          Complete Demographic Info
        </div>
      </Link>
      <Link
        className={styles.comppers}
        to="/personality"
        onClick={onCompPersClick}
      >
        <div className={styles.compdemoChild} />
        <div className={styles.completeDemographicInfo}>
          Complete Personality Test
        </div>
      </Link>
      <Link className={styles.compquest} to="/questionare">
        <div className={styles.compdemoChild} />
        <div className={styles.completeDemographicInfo}>
          Complete Questionnaire
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;

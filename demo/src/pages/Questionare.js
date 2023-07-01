import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Questionare.module.css";
const Questionare = () => {
  const navigate = useNavigate();

  const onNumsBoxesClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='submitText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNumsBoxes1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='q6Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNumsBoxes2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='q5Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNumsBoxes3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='q4Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNumsBoxes4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='q3Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNumsBoxes5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='q2Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSettingsButtonContainerClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onLogOutButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.questionare}>
      <div className={styles.q6} data-scroll-to="q6Container">
        <div className={styles.question6}>Question 6</div>
        <div className={styles.numsBoxes} onClick={onNumsBoxesClick}>
          <img className={styles.circlesIcon} alt="" src="/circles.svg" />
          <div className={styles.numbers}>
            <div className={styles.div}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div2}>3</div>
            <div className={styles.div3}>4</div>
            <div className={styles.div4}>5</div>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>7</div>
            <div className={styles.div7}>8</div>
            <div className={styles.div8}>9</div>
            <div className={styles.div9}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.q5} data-scroll-to="q5Container">
        <div className={styles.question6}>Question 5</div>
        <div className={styles.numsBoxes} onClick={onNumsBoxes1Click}>
          <img className={styles.circlesIcon} alt="" src="/circles.svg" />
          <div className={styles.numbers}>
            <div className={styles.div}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div2}>3</div>
            <div className={styles.div3}>4</div>
            <div className={styles.div4}>5</div>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>7</div>
            <div className={styles.div7}>8</div>
            <div className={styles.div8}>9</div>
            <div className={styles.div9}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.q4} data-scroll-to="q4Container">
        <div className={styles.question6}>Question 4</div>
        <div className={styles.numsBoxes} onClick={onNumsBoxes2Click}>
          <img className={styles.circlesIcon} alt="" src="/circles1.svg" />
          <div className={styles.numbers}>
            <div className={styles.div}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div2}>3</div>
            <div className={styles.div3}>4</div>
            <div className={styles.div4}>5</div>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>7</div>
            <div className={styles.div7}>8</div>
            <div className={styles.div8}>9</div>
            <div className={styles.div9}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.q3} data-scroll-to="q3Container">
        <div className={styles.question6}>Question 3</div>
        <div className={styles.numsBoxes} onClick={onNumsBoxes3Click}>
          <img className={styles.circlesIcon} alt="" src="/circles2.svg" />
          <div className={styles.numbers}>
            <div className={styles.div}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div2}>3</div>
            <div className={styles.div3}>4</div>
            <div className={styles.div4}>5</div>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>7</div>
            <div className={styles.div7}>8</div>
            <div className={styles.div8}>9</div>
            <div className={styles.div9}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.q2} data-scroll-to="q2Container">
        <div className={styles.question6}>Question 2</div>
        <div className={styles.numsBoxes} onClick={onNumsBoxes4Click}>
          <img className={styles.circlesIcon} alt="" src="/circles3.svg" />
          <div className={styles.numbers}>
            <div className={styles.div}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div2}>3</div>
            <div className={styles.div3}>4</div>
            <div className={styles.div4}>5</div>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>7</div>
            <div className={styles.div7}>8</div>
            <div className={styles.div8}>9</div>
            <div className={styles.div9}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.q1}>
        <div className={styles.question6}>
          <p className={styles.question11}>Question 1</p>
        </div>
        <div className={styles.numsBoxes} onClick={onNumsBoxes5Click}>
          <img className={styles.circlesIcon} alt="" src="/circles4.svg" />
          <div className={styles.numbers}>
            <div className={styles.div}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div2}>3</div>
            <div className={styles.div3}>4</div>
            <div className={styles.div4}>5</div>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>7</div>
            <div className={styles.div7}>8</div>
            <div className={styles.div8}>9</div>
            <div className={styles.div9}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.loginButtonChild} />
        <b className={styles.submit} data-scroll-to="submitText">
          Submit
        </b>
      </div>
      <div className={styles.menusidebar}>
        <div className={styles.menusidebarChild} />
        <img className={styles.menusidebarItem} alt="" src="/rectangle-3.svg" />
        <div
          className={styles.profileButton}
          onClick={onProfileButtonContainerClick}
        >
          <div className={styles.profile}>Profile</div>
          <div className={styles.profileIcon}>
            <div className={styles.profileIconChild} />
            <div className={styles.profileIconItem} />
            <div className={styles.profileIconInner} />
          </div>
        </div>
        <div
          className={styles.settingsButton}
          onClick={onSettingsButtonContainerClick}
        >
          <div className={styles.settings}>Settings</div>
          <div className={styles.settingsIcon}>
            <div className={styles.settingsIconChild} />
            <div className={styles.settingsIconItem} />
            <div className={styles.settingsIconInner} />
          </div>
        </div>
        <div className={styles.logOutButton} onClick={onLogOutButtonClick}>
          <div className={styles.logOut}>Log out</div>
          <img className={styles.logoutIcon} alt="" src="/logout-icon.svg" />
        </div>
        <div className={styles.neiu}>NEIU</div>
      </div>
    </div>
  );
};

export default Questionare;

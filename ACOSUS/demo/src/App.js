import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import Personality from "./pages/Personality";
import Demographic from "./pages/Demographic";
import Questionare from "./pages/Questionare";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import CreateAccount from "./pages/CreateAccount";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/newpassword":
        title = "";
        metaDescription = "";
        break;
      case "/personality":
        title = "";
        metaDescription = "";
        break;
      case "/demographic":
        title = "";
        metaDescription = "";
        break;
      case "/questionare":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpassword":
        title = "";
        metaDescription = "";
        break;
      case "/createaccount":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
  

    <Routes>
        <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/personality" element={<Personality />} />
      <Route path="/demographic" element={<Demographic />} />
      <Route path="/questionare" element={<Questionare />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/createaccount" element={<CreateAccount />} />
    </Routes>
      
  );
}
export default App;

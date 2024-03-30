import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux-toolkit/Store";

import Routes from "@/Routes";
import { useEffect } from "react";
import { DEBUG_MODE } from "./utils/Constants";
import { isEmpty } from "./utils/Functions";

function App() {
  const pages = useRoutes(Routes);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || '{"name":"Ryan Ogilvie"}'
    );
    const isLoggedIn = !isEmpty(currentUser);

    if (isLoggedIn) {
      DEBUG_MODE && console.log("current user: ", currentUser?.name);
      pathname === "/signin" && navigate("/");
    } else {
      DEBUG_MODE &&
        console.log("redirect to 'sign in' page... ", currentUser?.name);
      navigate("/signin");
    }
  }, []);

  return <Provider store={store}>{pages}</Provider>;
}

export default App;

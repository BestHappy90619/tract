import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { DEBUG_MODE } from "@/utils/Constants";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser, isLoggedIn } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      DEBUG_MODE && console.log("current user: ", currentUser?.name);
    } else {
      DEBUG_MODE &&
        console.log("redirect to 'sign in' page... ", currentUser?.name);
      navigate("/signin");
    }
  }, [isLoggedIn]);

  return <></>;
};

export default Home;

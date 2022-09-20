import { React, useState } from "react";
import { TrainingData } from "../data";
import HomePage from "./HomePage";
import HomePageManager from "./HomePageManager";
import loginImg from './login.png';
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";

const Login = ({ loggedIn, setLoggedIn }) => {


  const navigate = useNavigate()

  const divFlexContainer = {
    display: "flex",
  }

  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const [userOrManager, setUserOrManager] = useState(true);
  const btnHandler = (e) => {
    e.preventDefault();
    setLoggedIn((prev) => !prev);

    if(username.length === 0){
      navigate("/error");
    }

    let user1 = TrainingData.find((td) => td.Email === username);

    if (user1 !== undefined) {
      setUser(user1);
    } else{
      setUserOrManager(false);
    }
  };

  return (
    <>
      <div className={classes.login}>
        <div style={divFlexContainer}>
          <img src={loginImg} alt="login" />
        </div>
        {(!user && userOrManager && !loggedIn) && (
          <form>
            <div className={classes.control}>
              <label>Email</label>
              <input
                type={"text"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            </div>

            <button className={classes.button} onClick={(e) => btnHandler(e)}>
              Login
            </button>
          </form>
        )}
        {userOrManager ? <HomePage user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <HomePageManager setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}

      </div></>
  );
};

export default Login;

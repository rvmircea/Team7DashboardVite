import { React, useState } from "react";
import { TrainingData } from "../data";
import StudentDetails from "./StudentDetails";
import classes from "./HomePageManager.module.css";

const HomePageManager = ({ loggedIn }) => {
  const allUsers = TrainingData;
  const [show, setShow] = useState(true);
  return (
    <div className = {classes.view}>
      {loggedIn && (
        <>
          <p>Users list</p>
          {allUsers.map((user) => {
            return (
              <li style={{ listStyle: "none" }} key={user.Email}>
                <StudentDetails user={user} setShow={setShow} />
              </li>
            );
          })}
        </>
      )}
    </div>
  );
};

export default HomePageManager;

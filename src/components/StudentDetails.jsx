import { React, useState } from "react";

import classes from "./StudentDetails.module.css";

const StudentDetails = ({ user, setShow }) => {
  const [isClicked, setIsClicked] = useState(false);
  const btnHandler = () => {
    setIsClicked(!isClicked);
    setShow((prev) => !prev);
  };
  return (
    <div className={classes["student-details"]}>
      <p2>{user.Email}</p2>

      <button onClick={() => btnHandler()}>
        {!isClicked ? <span>Show details</span> : <>Hide details</>}
      </button>
      <div className={classes.details}>
        {isClicked && (
          <div>
            <table>
              <tr>
                <td>
                  Courses Enrolled <span>{user.NewCoursesEnrolled}</span>
                </td>
                <td>
                  Deactivated<span>{String(user.Deactivated)}</span>
                </td>
              </tr>
              <tr>
                <td>
                  Courses Started<span> {user.NewCoursesStarted}</span>
                </td>
                <td>
                  SupervisorName<span> {user.SupervisorName}</span>
                </td>
              </tr>
              <tr>
                <td>
                  MinutesVideoConsumed<span> {user.MinutesVideoConsumed}</span>
                </td>
                <td>
                  MgrName<span> {user.MgrName}</span>
                </td>
              </tr>
              <tr>
                <td>
                  DateJoined
                  <span> {user.DateJoined.toLocaleDateString("en-GB")}</span>
                </td>
                <td>
                  L5MgrName<span> {user.L5MgrName}</span>
                </td>
              </tr>
              <tr>
                <td>
                  DateOfLastActivity
                  <span>
                    {" "}
                    {user.DateOfLastActivity.toLocaleDateString("en-GB")}
                  </span>
                </td>
                <td>
                  WorkCountry<span> {user.WorkCountry}</span>
                </td>
              </tr>
              <tr>
                <td>
                  Groups<span> {user.Groups}</span>
                </td>
                <td>
                  WorkRegion<span> {user.WorkRegion}</span>
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;

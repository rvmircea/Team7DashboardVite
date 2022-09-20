import React from "react";
import classes from "./HomePage.module.css"
import Courses from "./Courses";
const HomePage = ({ user, loggedIn }) => {
  // return <div>{user ? user.Email : "Homepage"}</div>;

  const pStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#3287c1",
    marginBottom: "48px",
    marginTop: "32px",
  }

  const spanStyle = {
    marginLeft: "auto",
    marginRight: "6px",
    color: "#3287c1",
    textDecoration: "underline"
  }
  

  return (
    <>
      { (user && loggedIn) &&
        <div className={classes.details}>
          <p style={pStyle}>Hello, {user.Email.substring(0, user.Email.length - 9)}</p>
          <div>
            <p1 className={classes.p}>New Courses Enrolled:  <span style={spanStyle}>{user.NewCoursesEnrolled} courses</span></p1>
          
            <p1>New Courses Started: <span style={spanStyle}> {user.NewCoursesStarted} courses</span></p1>
          
            <p1>Minutes Video Consumed: <span style={spanStyle}>{user.MinutesVideoConsumed} minutes</span></p1>
            <Courses user={user}/>
          </div>
        </div>}
    </>
  )
};

export default HomePage;

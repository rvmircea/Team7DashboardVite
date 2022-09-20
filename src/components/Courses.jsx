import React from 'react'
import { VirtualAttendance } from "../data"
import AttendedStatus from  "./AttendedStatus"
const Courses = ({ user }) => {

    const userData = VirtualAttendance.find(allUsers => allUsers.Email === user.Email);

    const pStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#444444",
    }

    return (
        <div>
            <p style={pStyle}>
                {user.Email.substring(0, user.Email.length - 9)} activities:
            </p>
            <div>
                <div>
                    {Object.keys(userData).map(keyName => {
                        if(keyName !== "Email")
                        return (
                        <div key={userData.Email} style={{marginTop: "16px", display: "flex"}}>
                            {keyName} <AttendedStatus status={userData[keyName].includes("y")}/> 
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Courses
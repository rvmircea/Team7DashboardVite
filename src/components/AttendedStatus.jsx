import React, { useState } from 'react'
import classes from "./AttendedStatus.module.css"

const AttendedStatus = ({ status }) => {
    const attendedStyle = {
        color: "#6EA204",
        fontWeight: "600"
    }

    const notAttendedStyle = {
        color: "#CE1126",
        fontWeight: "500"
    }

    const [attendedStatus, setAttendedStatus] = useState(status);
    const handleChange = () => {
        setAttendedStatus(prev => !prev)
    }

    return (
        <div style={{ marginLeft: "auto" }}>
            {attendedStatus ? <span style={attendedStyle}>Attended</span> : <span style={notAttendedStyle}>Not attended</span>}

            {!attendedStatus &&
                <button className={classes.buttonStyle} onClick={() => handleChange()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes.iconStyle}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            }

        </div>
    )
}

export default AttendedStatus
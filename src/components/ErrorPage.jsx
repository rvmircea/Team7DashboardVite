import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from "./ErrorPage.module.css"
const ErrorPage = ({setLoggedIn}) => {
    useEffect( () => {
        setLoggedIn(false);
    }, [setLoggedIn]);
    return (
        <div style={{display: "flex", justifyItems: "center", alignItems: "center", backgroundColor:"#EEEEEE"}}>
            <button className={classes['backBtn']} onClick={() => window.location.reload(false)}>
            <Link to={"/"}>
                <span style={{textDecoration: "none", color:"white"}}>
                    Back to login page
                </span>
                </Link>
            </button>
            
        </div>
    )
}

export default ErrorPage
import React, { useState } from "react";
import {Link } from "react-router-dom";

import data from './data.js'
import './AboutUs.css'

// This is a div for the single block of text.
const SingleDiv = props => {
    return (
        <div className="info">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
};

// This is the login side
const Login  = (props) => {
    const [email, setEmail] = useState("");

    const onButtonClick = () => {
        // You'll update this function later...
    }


    return(
    <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <Link to='/feed'>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Log in"} />
            </Link>
        </div>
    </div>

    )
}

// Having all our divs on the landing page.
const AboutUs = () => {
    const AllDivs = data.map(info => {
        return (
            <SingleDiv 
                title={info.title}
                content={info.content}
            />
        )  

    })
    return(
        <div className="main">
            <div className="alldivs">
                {AllDivs}
            </div>
            <div className="alllogin">
                <Login />
            </div>
            
        </div>
    ) 
};

export default AboutUs;
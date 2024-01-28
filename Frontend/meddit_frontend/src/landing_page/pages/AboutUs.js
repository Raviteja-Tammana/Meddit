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
const LoginForm = () => {
    // State to manage login form fields
    const [loginData, setLoginData] = useState({
      username: '',
    });
  
    // Event handler for form field changes
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (
      <div>
        <h1>Login Form</h1>
        <form action="http://127.0.0.1:8080/login" method="POST">
          <label>
            Username:
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
                    value={'>>'}
                    />
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
                <LoginForm />
            </div>
            
        </div>
    ) 
};

export default AboutUs
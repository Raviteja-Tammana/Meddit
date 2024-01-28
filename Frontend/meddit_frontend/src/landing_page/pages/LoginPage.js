import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

import datalog from './datalog.js'
import './LoginPage.css'

// This is a div for the single block of text.
const SingleDiv = props => {
    return (
        <div className="info">
            <h2>{props.content}</h2>
        </div>
    )
};

export const validEmail = new RegExp( '^[a-zA-Z0-9._:$!%-]+@hoag.org$' );

// This is the login side
const Login  = (props) => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [emailErr, setEmailErr] = useState(false);

    const onButtonClick = () => {
        console.log(email);

       // authentication
        if (!validEmail.test(email)) {
            setEmailErr(true);
            return;
        }

        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify({email: email}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            navigate('/feed', {
                    state:{
                    data: data
                }
            })
        })
    }

    return(
    <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Let's Talk.</div>
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
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={'Login'}
                />
            {emailErr && <p>Your email is invalid</p>}
        </div>
    </div>
)}

// Having all our divs on the landing page.
const LoginPage = () => {
    const AllDivs = datalog.map(info => {
        return (
            <SingleDiv 
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

export default LoginPage;
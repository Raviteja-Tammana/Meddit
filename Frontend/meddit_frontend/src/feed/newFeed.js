import React from "react"
import './newFeed.css'
import {Link, useLocation } from "react-router-dom";


// This is activated after every new post is made.

const NewFeed = () => {
    const location = useLocation();
    console.log(location.data)
    return(
        <h1>Hello</h1>
    )
}

export default NewFeed
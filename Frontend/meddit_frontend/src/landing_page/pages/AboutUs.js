import React from "react";

import data from './data.js'

const SingleDiv = props => {
    return (
        <div className="info">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
};

const AboutUs = () => {
    const AllDivs = data.map(info => {
        return <SingleDiv 
            title={info.title}
            content={info.content}
        />
    })

    return AllDivs;
};

export default AboutUs;
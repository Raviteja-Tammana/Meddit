import React from "react";
import data from './data.js'
import './AboutUs.css'

const SingleDiv = props => {
    return (
        <div className="info">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
};

const Info = () => {
    const allInfo = data.map(info => {
        return(
            <SingleDiv 
                title={info.title}
                content={info.content}
            />
        )
    })

    return(
        <div className="allContent">
            {allInfo}
        </div>
    )
}

export default Info;
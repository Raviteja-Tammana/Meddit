import React from "react";
import './IndividualPost.css'
import { useParams } from "react-router-dom";

const IndividualPost = () => {
    let { id } = useParams();
    return(
        <h1>
            This is the user id: {id}
        </h1>
    )
}

export default IndividualPost
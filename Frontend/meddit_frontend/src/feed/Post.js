import React from "react";
import './Post.css'

const Post = props => {
    return(
        <div className="post">
            <div className="post-header">
                    <p>{props.title}</p>
                    <p>{props.date}</p>
            </div>
            <div className="post-content">
                <p>
                    {props.content}
                </p>
            </div>
            <div className="propose_solution">
                <h4>Propose Solution</h4>
            </div>
            <div className="similar_experience">
                <h4>Similar Experience</h4>
            </div>
        </div>
    )
}

export default Post
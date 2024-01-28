import React from "react";
import { Link } from "react-router-dom";
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
            </div>
    )
}

export default Post
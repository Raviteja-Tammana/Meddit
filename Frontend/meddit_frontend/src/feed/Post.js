import React, { useState } from 'react'
import { Link } from "react-router-dom";
import heart_filled from "./heart_filled.png"
import heart_empty from "./heart_empty.png"
import './Post.css'

const Post = props => {

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const buttonOnClick = () => {
        
        console.log("I got clicked")

        fetch('http://localhost:8080/like', {
            method: 'POST',
            body: JSON.stringify(
                {
                    postID: props.id,
                    likes: props.likes,
                    isLiked: liked
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            setLikes(data[0].likes)
        })

        setLiked(!liked);

    }


    return(
        <Link to={`/feed/${props.id}`} className="links">
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
                <div className="post-likes">
                    <button><img src={liked ? heart_filled : heart_empty} alt="my image" onClick={buttonOnClick} /></button>
                </div>
            </div>
       </Link>
    )
}

export default Post
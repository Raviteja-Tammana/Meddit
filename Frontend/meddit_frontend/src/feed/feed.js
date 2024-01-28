import React, { useState } from 'react'
import Post from './Post';
import {Link } from "react-router-dom";

import DUMMY_DATA from './data';
import './feed.css'

const Feed = () => {
    const AllInfo = DUMMY_DATA.map(info => {
        return(
            <span>
                <Post 
                    title={info.title}
                    date = {info.date}
                    content = {info.content}
                    id={info.postID}
                />
            </span>
        )
    })
    return(
       <span className='allposts'>
                <Link to='/creating'>
                    <input
                        className={"postButton"}
                        type="button"
                        value={"Add Post"} />
                </Link>
            {AllInfo}
       </span>
    )
}



export default Feed;
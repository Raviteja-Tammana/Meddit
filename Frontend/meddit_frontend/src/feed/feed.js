import React, { useState } from 'react'
import Post from './Post';
import {Link, useLocation } from "react-router-dom";

import './feed.css'

const Feed = () => {
    const location = useLocation();
    const AllInfo = location.state.data.map(info => {
        return(
            <span>
                <Post 
                    title={info.title}
                    date = {info.date}
                    content = {info.content}
                    id={info.postID}
                    likes={info.likes}
                />
            </span>
        )
    })
    return(
            <div className='allposts'>
                <div className='buttons'>
                    <a href="https://www.hoag.org/about-hoag/corporate-information/corporate-compliance/" target="_blank">
                        <button className='report'>REPORT</button>
                    </a>
                    <Link to='/creating'>
                        <input
                            className={"postButton"}
                            type="button"
                            value={"Add Post"} />
                    </Link>
                </div>

                {AllInfo}
            </div>
    )
}



export default Feed;
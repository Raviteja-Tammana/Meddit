import React from 'react'
import Post from './Post';

import DUMMY_DATA from './data';
import './feed.css'

const Feed = () => {
    const AllInfo = DUMMY_DATA.map(info => {
        return(
            <Post 
                title={info.title}
                date = {info.date}
                content = {info.content}
                id={info.postID}
            />
        )
    })
    return(
       <div className='allposts'>
            {AllInfo}
       </div>
    )
}



export default Feed;
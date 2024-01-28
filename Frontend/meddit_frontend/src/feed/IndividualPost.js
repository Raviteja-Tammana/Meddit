import React, { useState } from "react";
import './IndividualPost.css'
import { useParams } from "react-router-dom";
import Post from "./Post";



const IndividualPost = () => {
    let { id } = useParams();

    fetch('http://localhost:8080/expanded', {
        method: 'POST',
        body: JSON.stringify(
            {
                postID: id,
            }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
    }).then(function(response) {
        return response.json();
    }).then(function(data){

        <Post 
            title={data[0].title}
            date = {data[0].date}
            content = {data[0].content}
            id={data[0].postID}
            likes={data[0].likes}
        />
    })

    const [solutions, setSolutions ] = useState("");
    const [experiences, setExpereiences] = useState("");
    
    return(

        <div className="sections">
            <textarea
                placeholder="Propose Solution"
                onChange={ev => setSolutions(ev.target.value)}
                className={"postsol" }
                >
            </textarea>

            <textarea
                placeholder="Similar Experience"
                onChange={ev => setExpereiences(ev.target.value)}
                className={"similarexp"}
                >
            </textarea>

        </div>
    )
}

export default IndividualPost
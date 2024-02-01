import React, { useState } from "react";
import './IndividualPost.css'
import { useParams } from "react-router-dom";
import Post from "./Post";



const IndividualPost = () => {
    let { id } = useParams();
    const [data, setData] = useState('');

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
        console.log(data);
        setData(data[0]);

    })

    const [solutions, setSolutions ] = useState("");
    const [experiences, setExpereiences] = useState("");

    console.log(data.title)
    
    return(

        <div className="sections">
            <Post 
                title={data.title}
                date = {data.date}
                content = {data.content}
                id={data.postID}
                likes={data.likes}
             />

            <textarea
                rows={10}
                placeholder="Propose Solution"
                onChange={ev => setSolutions(ev.target.value)}
                className={"postsol" }
                >
            </textarea>

            <textarea
                rows={10}
                placeholder="Similar Experience"
                onChange={ev => setExpereiences(ev.target.value)}
                className={"similarexp"}
                >
            </textarea>

        </div>
    )
}

export default IndividualPost
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './creating.css'

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const onButtonClick = () => {
        fetch('http://localhost:8080/post', {
            method: 'POST',
            body: JSON.stringify(
                {
                    title: title,
                    content: content
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            console.log("here")
            console.log(data)
            navigate('/feed', {
                    state:{
                    data: data
                }
            })
        })

    }

    return(
        <div className="newPost">
            <input
                value={title}
                placeholder="Enter a title"
                onChange={ev => setTitle(ev.target.value)}
                className="newPost-Title" 
            />

            <input
                value={content}
                placeholder="Enter the content of the post"
                onChange={ev => setContent(ev.target.value)}
                className={"newPost-Content"} 
            />

            <input
                value={"Post"} 
                type="button"
                onClick={onButtonClick}
            />
        </div>

    )

}

export default CreatePost;
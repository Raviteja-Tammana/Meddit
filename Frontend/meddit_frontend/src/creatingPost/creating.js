import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './creating.css'

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const [emptyErr, setEmptyErr] = useState(false);

    const onButtonClick = () => {
        if (content.trim().length === 0 || title.trim().length === 0) {
            setEmptyErr(true);
            return;
        }

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
            <textarea
                value={title}
                placeholder="Enter a Title"
                onChange={ev => setTitle(ev.target.value)}
                className={"newPost-Title" }
                >
            </textarea>
            <br></br>
            <textarea
                rows="1"
                value={content}
                placeholder=" Enter the Content of the Post"
                onChange={ev => setContent(ev.target.value)}
                className={"newPost-Content"}
                >
            </textarea>

            <br></br>
            <input
                value={"Post"} 
                type="button"
                onClick={onButtonClick}
                className={"butPost"}
            />
            {emptyErr && <p>You can't post without both content and a title!</p>}
        </div>

    )

}

export default CreatePost;
import React, {useState} from "react";
import './creating.css'

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onButtonClick = () => {
        console.log(title)
        console.log(content)
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
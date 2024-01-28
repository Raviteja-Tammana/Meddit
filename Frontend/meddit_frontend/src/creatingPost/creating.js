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
            <textarea
                value={title}
                placeholder="Enter a Title"
                onChange={ev => setTitle(ev.target.value)}
                className={"newPost-Title" }
                required>
            </textarea>
            <br></br>
            <textarea
                rows="1"
                value={content}
                placeholder=" Enter the Content of the Post"
                onChange={ev => setContent(ev.target.value)}
                className={"newPost-Content"}
                required>
            </textarea>

            <br></br>
            <input
                value={"Post"} 
                type="button"
                onClick={onButtonClick}
                className={"butPost"}
            />
        </div>

    )

}

export default CreatePost;
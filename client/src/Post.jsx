import React from "react";
import "./Post.css"

function Post(props){
    return(
        <div className="postButton">
            <button type="submit" onClick={props.onClick}>Post Task</button>
        </div>
    )
}

export default Post
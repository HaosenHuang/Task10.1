import React from "react";
import "./Main.css"

function Description(props){
    return(
        <div className="description">
            <div className="title_div">
                <div className="title">
                    <p className="title_p">Task Title</p>
                </div>
                <input type="text" name="task_title" placeholder="Enter task title" onChange={props.onChange}/>
            </div>
            <div className="description">
                <div className="description_div">
                    <p className="description_p">Description</p>
                </div>
                <textarea name="description" placeholder="Enter task description" rows="5" onChange={props.onChange}/>
            </div>
        </div>
    )
}

export default Description

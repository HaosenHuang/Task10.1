import React from "react";
import "./Main.css"

function Suburb(props){
    return(
        <div className="suburb">
            <div className="suburb_div">
                <p className="suburb_p">Suburb</p>
            </div>
            <input type="text" name="task_suburb" placeholder="Enter a suburb" onChange={props.onChange}/>
        </div>
    )
}

export default Suburb
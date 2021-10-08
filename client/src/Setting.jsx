import React from "react";
import "./Main.css"
import Suburb from "./Suburb";

function Setting(props){    
    return(
        <div className="setting">
            {props.isTypePerson ? <TaskSettingSuburb onChange={props.onChange} /> : null}           
            <div className="setting_div">
                <div className="date">
                    <div className="date_div">
                        <p className="date_p">Date</p>
                    </div>
                    <input type="text" name="date" placeholder="Enter a date" onChange={props.onChange}/>
                </div>
            </div>
        </div>
    )
}

export default Setting
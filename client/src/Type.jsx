import React from "react";
import "./Main.css"

function Type(prop){
    return(
        <div className="type">
            <p className="type_p">Select Task Type:</p>
            <div>
                <label>
                    <input type="radio" name="type" value="person" defaultChecked onChange={prop.typeChange}/>
                    <span>In person</span>
                </label> 
            </div>
            <div>
                <label>
                    <input type="radio" name="type" value="online" onChange={prop.typeChange}/> 
                    <span>Online</span>
                </label>
            </div>
        </div>
    )
}

export default Type
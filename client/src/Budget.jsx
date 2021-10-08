import React from "react";
import "./Main.css"

function Budget(props){
    return(
        <div className="budget">
            <p className="budget_p">What is your budget?</p>
            <br/>
            <br/>
            <p className="budget_p">(This is an estimate)</p>
            <br />
            <br />
            <div className="budgetType">
                <div>
                    <label>
                        <input type="radio" name="budgetType" value="total" defaultChecked onChange={props.onChange}/>
                        <span>Total</span>
                    </label> 
                </div>
                <div>
                    <label>
                        <input type="radio" name="budgetType" value="hourly" onChange={props.onChange}/> 
                        <span>Hourly rate</span>
                    </label>
                </div>
            </div>
            <input className="budgetInput" type="text" name="budget" placeholder="$" onChange={props.onChange}/>
        </div>
    )
}

export default Budget
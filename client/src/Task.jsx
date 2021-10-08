import React, { useState } from 'react';
import Post from './Post';
import TextBoxOne from './TextBoxOne';
import TextBoxTwo from './TextBoxTwo';
import TextBoxThree from './TextBoxThree';
import TextBoxFour from './TextBoxFour';
import Description from './Description';
import Budget from './Budget';
import Setting from './Setting';
import Type from './Type';

function Task(){
    const [isPerson, setIsPerson] = useState(true)
    const [task, setTask] = useState({
        type: '',
        title: '',
        description: '',
        suburb: '',
        date: '',
        budgetType: '',
        budget: ''
    })
    const onTypeChange = (e)=>{
      if(e.target.value === "person"){
        setIsPerson(true)
        setTask((preValue)=>{
            return{
                ...preValue,
                type: "person"
            }
        })
      }
      else{
        setIsPerson(false)
        setTask((preValue)=>{
            return{
                ...preValue,
                type: "online"
            }
        })
      }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setTask((preValue)=>{
            return{
                ...preValue,
                [name]: value
            }
        })
    }
    const handleClick = ()=>{
        fetch('http://localhost:8000/task',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: task.type,
                title: task.title,
                description: task.description,
                suburb: task.suburb,
                date: task.date,
                budgetType: task.budgetType,
                budget: task.budget
            })
        })
        .then(response => response.json())
        .then(data => console(data))
        .catch(err => {
            console.log("Error: " + err)
        })
    }
    return (
        <div className="App">
          <Header1 />
          <TaskType typeChange={onTypeChange}/>
          <Header2 />
          <TaskDescribe onChange={handleChange}/>
          <Header3 />
          <TaskSetting isTypePerson={isPerson} onChange={handleChange}/>
          <Header4 />
          <TaskRemuneration onChange={handleChange}/>
          <Button onClick={handleClick}/>
        </div>
    );
}

export default Task
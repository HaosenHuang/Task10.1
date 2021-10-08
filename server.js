const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./client/models/Task")
const cors = require("cors")

mongoose.connect("mongodb://localhost:27017/TaskDB", {useNewUrlParser:true, useUnifiedTopology: true})

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

app.post('/', (req,res)=>{
    const task = new Task({
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      budgetType: req.body.budgetType,
      budget: req.body.budget
    })
    if(req.body.type == "person"){
        task.set("suburb",req.body.suburb)
    }
    task.save()
    .catch((err)=>console.log(err))
    res.redirect('/')
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfully")
})
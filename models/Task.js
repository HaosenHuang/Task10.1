const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        type: String,
        title: String,
        description: String,
        suburb: String,
        date: String,
        budgetType: String,
        budget: String
    }
)

module.exports = mongoose.model("Task", taskSchema)
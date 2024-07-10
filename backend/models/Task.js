const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    userId:{ type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String},
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
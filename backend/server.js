const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/taskcircle", { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
  time: String,
  description: String,
});
const Task = mongoose.model("Task", taskSchema);

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

app.listen(5000, () => console.log("Server running on port 5000")); 

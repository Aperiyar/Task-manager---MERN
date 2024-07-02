const taskModel = require("../models/TaskModel");
const mongoose = require("mongoose");

//create a task - POST
const createTask = async (req, res) => {
  const { title, discription } = req.body;

  try {
    const Task = await taskModel.create({ title, discription });
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//to get all tasks - GET

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.ststus(400).json({ error: e.message });
  }
};

//to get a single task -GET
const getSingleTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task Not Found" });
  }
  try {
    const singleTask = await taskModel.findById(id);
    res.status(200).json(singleTask);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//To Update Task -PATCH

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task Not Found" });
  }
  try {
    const task = await taskModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//To Delect Task

const delectTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task Not Found" });
  }
  try {
    const task = await taskModel.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  delectTask,
};

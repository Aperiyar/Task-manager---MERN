const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  delectTask,
} = require("../controller/taskController");

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", delectTask);

module.exports = router;

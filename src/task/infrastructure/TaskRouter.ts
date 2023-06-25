import express from "express";

import {
  createTaskController,
  getAllTaskController,
  getTaskByIdController,
  getTaskByTitleController,
  deleteTaskController,
} from "./dependencies";

export const taskRouter = express.Router();

taskRouter.post("/create", createTaskController.run.bind(createTaskController));
taskRouter.get("/", getAllTaskController.run.bind(getAllTaskController));
taskRouter.get("/:id", getTaskByIdController.run.bind(getTaskByIdController));
taskRouter.get("/bytitle/:title", getTaskByTitleController.run.bind(getTaskByTitleController));
taskRouter.delete("/:id", deleteTaskController.run.bind(deleteTaskController));
import express from "express";

import {
  createCaretakerController,
  getAllCaretakerController,
  getCaretakerByIdController,
  getCaretakerByUbicationController,
  deleteCaretakerController,
} from "./dependencies";

export const taskRouter = express.Router();

taskRouter.post("/create", createCaretakerController.run.bind(createCaretakerController));
taskRouter.get("/", getAllCaretakerController.run.bind(getAllCaretakerController));
taskRouter.get("/:id", getCaretakerByIdController.run.bind(getCaretakerByIdController));
taskRouter.get("/bytitle/:title", getCaretakerByUbicationController.run.bind(getCaretakerByUbicationController));
taskRouter.delete("/:id", deleteCaretakerController.run.bind(deleteCaretakerController));
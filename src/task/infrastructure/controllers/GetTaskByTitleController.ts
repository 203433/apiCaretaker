import express from "express";

import { GetTaskByTitleUseCase as GetTaskByTitleUseCase } from "../../application/usecases/GetTaskByTitleUseCase";

export class GetTaskbyTitleController {
  constructor(readonly taskByTitle: GetTaskByTitleUseCase) {}

  async run(req: express.Request, res: express.Response) {
    const taskTitle = String("tarea 1");
    console.log(typeof taskTitle)
    const task = await this.taskByTitle.run(taskTitle);
    res.status(200).json(task);
  }
}

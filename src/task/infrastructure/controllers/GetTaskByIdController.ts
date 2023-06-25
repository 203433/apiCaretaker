import express from "express";

import { GetTaskByIdUseCase as GetTaskByIdUseCase } from "../../application/usecases/GetTaskByIdUseCase";

export class GetTaskbyIdController {
  constructor(readonly taskById: GetTaskByIdUseCase) {}

  async run(req: express.Request, res: express.Response) {
    const taskId = Number(req.params.id);

    const task = await this.taskById.run(taskId);
    res.status(200).json(task);
  }
}

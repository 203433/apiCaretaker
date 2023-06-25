import { Request, Response } from "express";

import { GetAllTaskUseCase } from "../../application/usecases/GetAllTaskUseCase";

export class GetAllTaskController {
  constructor(readonly getAllTaskUseCase: GetAllTaskUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const taskList = await this.getAllTaskUseCase.run();
      res.status(200).json(taskList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

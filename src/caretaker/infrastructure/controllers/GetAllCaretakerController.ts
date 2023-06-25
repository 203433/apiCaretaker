import { Request, Response } from "express";

import { GetAllCaretakerUseCase } from "../../application/usecases/GetAllCaretakerUseCase";

export class GetAllCaretakerController {
  constructor(readonly getAllCaretakerUseCase: GetAllCaretakerUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const caretakerList = await this.getAllCaretakerUseCase.run();
      res.status(200).json(caretakerList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

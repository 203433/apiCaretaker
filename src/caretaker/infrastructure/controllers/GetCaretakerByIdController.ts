import express from "express";

import { GetCaretakerByIdUseCase as GetCaretakerByIdUseCase } from "../../application/usecases/GetCaretakerByIdUseCase";

export class GetCaretakerbyIdController {
  constructor(readonly caretakerById: GetCaretakerByIdUseCase) {}

  async run(req: express.Request, res: express.Response) {
    const caretakerId = Number(req.params.id);

    const caretaker = await this.caretakerById.run(caretakerId);
    res.status(200).json(caretaker);
  }
}

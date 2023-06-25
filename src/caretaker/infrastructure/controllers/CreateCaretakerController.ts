import { Request, Response } from "express";

import { CreateCaretakerUseCase } from "../../application/usecases/CreateCaretakerUseCase";
import { Caretaker } from "../../domain/entities/Caretaker";

export class CreateCaretakerController {
  constructor(readonly createCaretakerUseCase: CreateCaretakerUseCase) {}

  async run(req: Request, res: Response) {
    const caretakerContent = req.body;

    // console.log(caretakerContent);

    const caretaker = await this.createCaretakerUseCase.run(
      new Caretaker(0, caretakerContent.name, caretakerContent.description, caretakerContent.ubication )
    );
    res.status(201).json(caretaker);
  }
}

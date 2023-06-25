import express from "express";

import { GetCaretakerByUbicationUseCase as GetCaretakerByUbicationUseCase } from "../../application/usecases/GetCaretakerByUbicationUseCase";

export class GetCaretakerbyUbicationController {
  constructor(readonly caretakerByUbication: GetCaretakerByUbicationUseCase) {}

  async run(req: express.Request, res: express.Response) {
    const caretakerUbication = String("tarea 1");
    console.log(typeof caretakerUbication)
    const caretaker = await this.caretakerByUbication.run(caretakerUbication);
    res.status(200).json(caretaker);
  }
}

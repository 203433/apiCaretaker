import express from "express";
import { DeleteCaretakerUseCase } from "../../application/usecases/DeleteCaretakerUseCase";

export class DeleteCaretakerController {
    constructor(readonly deleteCaretakerUseCase: DeleteCaretakerUseCase) {}
    
    async run(request: express.Request, response: express.Response) {
        const caretakerId = Number(request.params.id);
        const caretaker = await this.deleteCaretakerUseCase.run(caretakerId);
        return response.status(200).json(caretaker);
    }
}
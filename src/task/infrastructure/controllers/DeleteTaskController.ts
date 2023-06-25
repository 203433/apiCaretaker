import express from "express";
import { DeleteTaskUseCase } from "../../application/usecases/DeleteTaskUseCase";

export class DeleteTaskController {
    constructor(readonly deleteTaskUseCase: DeleteTaskUseCase) {}
    
    async run(request: express.Request, response: express.Response) {
        const taskId = Number(request.params.id);
        const task = await this.deleteTaskUseCase.run(taskId);
        return response.status(200).json(task);
    }
}
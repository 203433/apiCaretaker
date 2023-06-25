import { DeleteTaskRepository } from "../../domain/repositories/TaskRepository";


export class DeleteTaskUseCase {
  constructor(readonly deleteTaskRepository: DeleteTaskRepository) {}

  async run(taskId: number) {
    const task = await this.deleteTaskRepository.delete(taskId);
    return task;
  }
}
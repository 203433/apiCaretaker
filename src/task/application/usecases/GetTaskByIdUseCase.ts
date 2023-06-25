import { GetTaskByIdRepository } from "../../domain/repositories/TaskRepository";

export class GetTaskByIdUseCase {
  constructor(readonly getTaskByIdRepository: GetTaskByIdRepository) {}

  async run(taskId: number) {
    const task = await this.getTaskByIdRepository.getById(taskId);
    return task;
  }
}

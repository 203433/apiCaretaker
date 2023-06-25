import { GetAllTaskRepository } from "../../domain/repositories/TaskRepository";

export class GetAllTaskUseCase {
  constructor(readonly getAllTaskRepository: GetAllTaskRepository) {}

  async run() {
    const listAllTasks = await this.getAllTaskRepository.getAll();
    return listAllTasks;
  }
}

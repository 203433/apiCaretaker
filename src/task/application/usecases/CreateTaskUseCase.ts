import { Task as Task } from "../../domain/entities/Task";
import { CreateTaskRepository } from "../../domain/repositories/TaskRepository";

export class CreateTaskUseCase {
  constructor(readonly createTaskRepository: CreateTaskRepository) {}

  async run(task: Task) {
    const createTask = await this.createTaskRepository.createTask(task);
    return createTask;
  }
}

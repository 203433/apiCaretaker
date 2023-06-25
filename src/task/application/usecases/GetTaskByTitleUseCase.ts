import { GetTaskByTitleRepository } from "../../domain/repositories/TaskRepository";

export class GetTaskByTitleUseCase {
  constructor(readonly getTaskByTitleRepository: GetTaskByTitleRepository) {}

  async run(taskTitle: string) {
    const task = await this.getTaskByTitleRepository.getByTitle(taskTitle);
    return task;
  }
}

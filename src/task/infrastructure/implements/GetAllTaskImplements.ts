import * as Task from "../../domain/entities/Task";
import * as TaskRepository from "../../domain/repositories/TaskRepository";
import * as dbConnection from "../database/db-connection";

export class GetAllTaskImplements
  implements TaskRepository.GetAllTaskRepository
{
  async getAll(): Promise<Task.Task[] | null> {
    const sql = "SELECT * FROM tasks";
    try {
      const result = await dbConnection.pool.query(sql);
      const tasks: Task.Task[] = result.rows.map((taskData: any) => ({
        id: taskData.id,
        title: taskData.title,
        description: taskData.description,
      }));
      return tasks;
    } catch (error) {
      throw error;
    }
  }
}

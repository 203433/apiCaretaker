import { Task as Task } from "../../domain/entities/Task";
import { GetTaskByTitleRepository } from "../../domain/repositories/TaskRepository";
import { pool } from "../database/db-connection";

export class GetTaskByTitleImplements implements GetTaskByTitleRepository {
  async getByTitle(taskTitle: string): Promise<Task | null> {
    const sql = "SELECT * FROM tasks WHERE title = $1";
    const values = [taskTitle];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const taskData = result.rows[0];
        const task: Task = {
          id: taskData.id,
          title: taskData.title,
          description: taskData.description,
        };
        return task;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
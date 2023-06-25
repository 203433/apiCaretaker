import { Task as Task } from "../../domain/entities/Task";
import { CreateTaskRepository } from "../../domain/repositories/TaskRepository";
import { pool } from "../database/db-connection";

export class CreateTaskImplements implements CreateTaskRepository {
  async createTask(task: Task): Promise<Task | null> {
    const sql =
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *";
    const values = [task.title, task.description];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const createdTaskData = result.rows[0];
        const createdTask: Task = {
          id: createdTaskData.id,
          title: createdTaskData.title,
          description: createdTaskData.description,
        };
        return createdTask;
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
}

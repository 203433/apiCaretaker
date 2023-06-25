import { DeleteTaskRepository } from "../../domain/repositories/TaskRepository";
import { pool } from "../database/db-connection";


export class DeleteTaskImplements implements DeleteTaskRepository{
  async delete(taskId: number): Promise<boolean> {
    const sql = "DELETE FROM tasks WHERE id = $1 RETURNING *";
    try {
      const result = await pool.query(sql, [taskId]);
      return result.rowCount > 0;
    } catch (error) {
      throw error;
    }
  }
}
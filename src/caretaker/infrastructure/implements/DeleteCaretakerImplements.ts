import { DeleteCaretakerRepository } from "../../domain/repositories/CaretakerRepository";
import { pool } from "../database/db-connection";


export class DeleteCaretakerImplements implements DeleteCaretakerRepository{
  async delete(caretakerId: number): Promise<boolean> {
    const sql = "DELETE FROM tasks WHERE id = $1 RETURNING *";
    try {
      const result = await pool.query(sql, [caretakerId]);
      return result.rowCount > 0;
    } catch (error) {
      throw error;
    }
  }
}
import { Caretaker as Caretaker } from "../../domain/entities/Caretaker";
import { GetCaretakerByIdRepository } from "../../domain/repositories/CaretakerRepository";
import { pool } from "../database/db-connection";

export class GetCaretakerByIdImplements implements GetCaretakerByIdRepository {
  async getById(caretakerId: number): Promise<Caretaker | null> {
    const sql = "SELECT * FROM caretakers WHERE id = $1";
    const values = [caretakerId];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const caretakerData = result.rows[0];
        const caretaker: Caretaker = {
          id: caretakerData.id,
          name: caretakerData.name,
          description: caretakerData.description,
          ubication: caretakerData.ubication,
        };
        return caretaker;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

import { Caretaker as Caretaker } from "../../domain/entities/Caretaker";
import { GetCaretakerByUbicationRepository } from "../../domain/repositories/CaretakerRepository";
import { pool } from "../database/db-connection";

export class GetCaretakerByUbicationImplements implements GetCaretakerByUbicationRepository {
  async getByUbication(caretakerTitle: string): Promise<Caretaker | null> {
    const sql = "SELECT * FROM caretakers WHERE title = $1";
    const values = [caretakerTitle];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const caretakerData = result.rows[0];
        const caretaker: Caretaker = {
          id: caretakerData.id,
          name: caretakerData.name,
          description: caretakerData.description,
          ubication: caretakerData.ubication
        };
        return caretaker;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
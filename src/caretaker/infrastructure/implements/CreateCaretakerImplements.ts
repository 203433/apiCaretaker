import { Caretaker as Caretaker } from "../../domain/entities/Caretaker";
import { CreateCaretakerRepository } from "../../domain/repositories/CaretakerRepository";
import { pool } from "../database/db-connection";

export class CreateCaretakerImplements implements CreateCaretakerRepository {
  async createCaretaker(caretaker: Caretaker): Promise<Caretaker | null> {
    const sql =
      "INSERT INTO caretakers (name, description, ubication) VALUES ($1, $2, $3) RETURNING *";
    const values = [caretaker.name, caretaker.description, caretaker.ubication];
    try {
      const result = await pool.query(sql, values);
      if (result.rowCount > 0) {
        const createdCaretakerData = result.rows[0];
        const createdCaretaker: Caretaker = {
          id: createdCaretakerData.id,
          name: createdCaretakerData.name,
          description: createdCaretakerData.description,
          ubication: createdCaretakerData.ubication,
        };
        return createdCaretaker;
      }
      return null;
    } catch (err) {
      throw err;
    }
  }
}

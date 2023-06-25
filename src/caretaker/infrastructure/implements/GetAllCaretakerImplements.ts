import * as Caretaker from "../../domain/entities/Caretaker";
import * as CaretakerRepository from "../../domain/repositories/CaretakerRepository";
import * as dbConnection from "../database/db-connection";

export class GetAllCaretakerImplements
  implements CaretakerRepository.GetAllCaretakerRepository
{
  async getAll(): Promise<Caretaker.Caretaker[] | null> {
    const sql = "SELECT * FROM caretakers";
    try {
      const result = await dbConnection.pool.query(sql);
      const caretakers: Caretaker.Caretaker[] = result.rows.map((caretakerData: any) => ({
        id: caretakerData.id,
        name: caretakerData.name,
        description: caretakerData.description,
        ubication: caretakerData.ubication,
      }));
      return caretakers;
    } catch (error) {
      throw error;
    }
  }
}

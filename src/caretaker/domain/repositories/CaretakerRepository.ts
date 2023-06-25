import { Caretaker as Caretaker } from "../entities/Caretaker";

export interface GetCaretakerByIdRepository {
  getById(caretakerId: number): Promise<Caretaker | null>;
}

export interface CreateCaretakerRepository {
  createCaretaker(caretaker: Caretaker): Promise<Caretaker | null>;
}

export interface GetAllCaretakerRepository {
  getAll(): Promise<Caretaker[] | null>;
}

export interface GetCaretakerByUbicationRepository {
  getByUbication(caretakerUbication: string): Promise<Caretaker | null>;
}

export interface DeleteCaretakerRepository {
  delete(taskId: number): Promise<boolean>;
}
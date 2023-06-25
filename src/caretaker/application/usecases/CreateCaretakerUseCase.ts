import { Caretaker as Caretaker } from "../../domain/entities/Caretaker";
import { CreateCaretakerRepository } from "../../domain/repositories/CaretakerRepository";

export class CreateCaretakerUseCase {
  constructor(readonly createCaretakerRepository: CreateCaretakerRepository) {}

  async run(caretaker: Caretaker) {
    const createCaretaker = await this.createCaretakerRepository.createCaretaker(caretaker);
    return createCaretaker;
  }
}

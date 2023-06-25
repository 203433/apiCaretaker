import { DeleteCaretakerRepository } from "../../domain/repositories/CaretakerRepository";


export class DeleteCaretakerUseCase {
  constructor(readonly deleteCaretakerRepository: DeleteCaretakerRepository) {}

  async run(caretakerId: number) {
    const caretaker = await this.deleteCaretakerRepository.delete(caretakerId);
    return caretaker;
  }
}
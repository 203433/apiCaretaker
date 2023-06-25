import { GetCaretakerByIdRepository } from "../../domain/repositories/CaretakerRepository";

export class GetCaretakerByIdUseCase {
  constructor(readonly getCaretakerByIdRepository: GetCaretakerByIdRepository) {}

  async run(caretakerId: number) {
    const caretaker = await this.getCaretakerByIdRepository.getById(caretakerId);
    return caretaker;
  }
}

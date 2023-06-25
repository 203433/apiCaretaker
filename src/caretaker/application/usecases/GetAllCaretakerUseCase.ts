import { GetAllCaretakerRepository } from "../../domain/repositories/CaretakerRepository";

export class GetAllCaretakerUseCase {
  constructor(readonly getAllCaretakerRepository: GetAllCaretakerRepository) {}

  async run() {
    const listAllCaretakers = await this.getAllCaretakerRepository.getAll();
    return listAllCaretakers;
  }
}

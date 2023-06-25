import { GetCaretakerByUbicationRepository } from "../../domain/repositories/CaretakerRepository";

export class GetCaretakerByUbicationUseCase {
  constructor(readonly getCaretakerByUbicationRepository: GetCaretakerByUbicationRepository) {}

  async run(caretakerUbication: string) {
    const caretaker = await this.getCaretakerByUbicationRepository.getByUbication(caretakerUbication);
    return caretaker;
  }
}

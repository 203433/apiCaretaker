import { CreateCaretakerUseCase as CreateCaretakerUseCase } from "../application/usecases/CreateCaretakerUseCase";
import { GetAllCaretakerUseCase as GetAllCaretakerUseCase } from "../application/usecases/GetAllCaretakerUseCase";
import { GetCaretakerByIdUseCase as GetCaretakerByIdUseCase } from "../application/usecases/GetCaretakerByIdUseCase";
import { GetCaretakerByUbicationUseCase } from "../application/usecases/GetCaretakerByUbicationUseCase";
import { DeleteCaretakerUseCase } from "../application/usecases/DeleteCaretakerUseCase";

import { CreateCaretakerController as CreateCaretakerController } from "./controllers/CreateCaretakerController";
import { GetAllCaretakerController as GetAllCaretakerController } from "./controllers/GetAllCaretakerController";
import { GetCaretakerbyIdController } from "./controllers/GetCaretakerByIdController";
import { GetCaretakerbyUbicationController } from "./controllers/GetCaretakerByUbicationController";
import { DeleteCaretakerController } from "./controllers/DeleteCaretakerController";

import { CreateCaretakerImplements } from "./implements/CreateCaretakerImplements";
import { GetAllCaretakerImplements as GetAllCaretakerImplements } from "./implements/GetAllCaretakerImplements";
import { GetCaretakerByIdImplements as GetCaretakerByIdImplements } from "./implements/GetCaretakerByIdImplements";
import { GetCaretakerByUbicationImplements } from "./implements/GetCaretakerByUbicationImplements";
import { DeleteCaretakerImplements } from "./implements/DeleteCaretakerImplements";

const createCaretakerImplements = new CreateCaretakerImplements();
const getCaretakerByIdImplements = new GetCaretakerByIdImplements();
const getAllCaretakerImplements = new GetAllCaretakerImplements();
const getCaretakerByUbicationImplements = new GetCaretakerByUbicationImplements();
const deleteCaretakerImplements = new DeleteCaretakerImplements();

export const createCaretakerUseCase = new CreateCaretakerUseCase(createCaretakerImplements);
export const getCaretakerByIdUseCase = new GetCaretakerByIdUseCase(getCaretakerByIdImplements);
export const getAllCaretakerUseCase = new GetAllCaretakerUseCase(getAllCaretakerImplements);
export const getCaretakerByUbicationUseCase = new GetCaretakerByUbicationUseCase(getCaretakerByUbicationImplements);
export const deleteCaretakerUseCase = new DeleteCaretakerUseCase(deleteCaretakerImplements);

export const createCaretakerController = new CreateCaretakerController(createCaretakerUseCase);
export const getCaretakerByIdController = new GetCaretakerbyIdController(getCaretakerByIdUseCase);
export const getAllCaretakerController = new GetAllCaretakerController(getAllCaretakerUseCase);
export const getCaretakerByUbicationController = new GetCaretakerbyUbicationController(getCaretakerByUbicationUseCase);
export const deleteCaretakerController = new DeleteCaretakerController(deleteCaretakerUseCase);

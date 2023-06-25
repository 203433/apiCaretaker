import { CreateTaskUseCase as CreateTaskUseCase } from "../application/usecases/CreateTaskUseCase";
import { GetAllTaskUseCase as GetAllTaskUseCase } from "../application/usecases/GetAllTaskUseCase";
import { GetTaskByIdUseCase as GetTaskByIdUseCase } from "../application/usecases/GetTaskByIdUseCase";
import { GetTaskByTitleUseCase } from "../application/usecases/GetTaskByTitleUseCase";
import { DeleteTaskUseCase } from "../application/usecases/DeleteTaskUseCase";

import { CreateTaskController as CreateTaskController } from "./controllers/CreateTaskController";
import { GetAllTaskController as GetAllTaskController } from "./controllers/GetAllTaskController";
import { GetTaskbyIdController } from "./controllers/GetTaskByIdController";
import { GetTaskbyTitleController } from "./controllers/GetTaskByTitleController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";

import { CreateTaskImplements } from "./implements/CreateTaskImplements";
import { GetAllTaskImplements as GetAllTaskImplements } from "./implements/GetAllTaskImplements";
import { GetTaskByIdImplements as GetTaskByIdImplements } from "./implements/GetTaskByIdImplements";
import { GetTaskByTitleImplements } from "./implements/GetTaskByTitleImplements";
import { DeleteTaskImplements } from "./implements/DeleteTaskImplements";

const createTaskImplements = new CreateTaskImplements();
const getTaskByIdImplements = new GetTaskByIdImplements();
const getAllTaskImplements = new GetAllTaskImplements();
const getTaskByTitleImplements = new GetTaskByTitleImplements();
const deleteTaskImplements = new DeleteTaskImplements();

export const createTaskUseCase = new CreateTaskUseCase(createTaskImplements);
export const getTaskByIdUseCase = new GetTaskByIdUseCase(getTaskByIdImplements);
export const getAllTaskUseCase = new GetAllTaskUseCase(getAllTaskImplements);
export const getTaskByTitleUseCase = new GetTaskByTitleUseCase(getTaskByTitleImplements);
export const deleteTaskUseCase = new DeleteTaskUseCase(deleteTaskImplements);

export const createTaskController = new CreateTaskController(createTaskUseCase);
export const getTaskByIdController = new GetTaskbyIdController(getTaskByIdUseCase);
export const getAllTaskController = new GetAllTaskController(getAllTaskUseCase);
export const getTaskByTitleController = new GetTaskbyTitleController(getTaskByTitleUseCase);
export const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

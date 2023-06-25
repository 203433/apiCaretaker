import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

import * as db from "./task/infrastructure/database/db-createTable";
import { taskRouter } from "./task/infrastructure/TaskRouter";
import { userRouter } from "./user/infrastructure/UserRouter";

const app = express();

db.createTable();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(morgan("dev"));



app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});

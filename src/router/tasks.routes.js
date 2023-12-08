import Router from "express-promise-router";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import isAuth from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/tasks.schema.js";

const router = Router();

// Routes
router.get("/tasks", isAuth, getTasks);

router.get("/tasks/:id", isAuth, getTaskById);

router.post("/tasks", isAuth, validateSchema(createTaskSchema), createTask);

router.put("/tasks/:id", isAuth, validateSchema(updateTaskSchema), updateTask);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;

import Router from "express-promise-router";
import { getTasks, getTaskById, createTask, updateTask, deleteTask  } from "../controllers/tasks.controller.js";

const router = Router();

// Routes
router.get('/tasks', getTasks);

router.get('/tasks/:id', getTaskById);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

export default router;
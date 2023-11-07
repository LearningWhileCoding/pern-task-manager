import Router from 'express-promise-router';
import { getTasks, getTaskById, createTask, updateTask, deleteTask  } from '../controllers/tasks.controller.js';
import isAuth from '../middlewares/auth.middleware.js';

const router = Router();

// Routes
router.get('/tasks', isAuth, getTasks);

router.get('/tasks/:id', isAuth, getTaskById);

router.post('/tasks', isAuth, createTask);

router.put('/tasks/:id', isAuth, updateTask);

router.delete('/tasks/:id', isAuth, deleteTask);

export default router;
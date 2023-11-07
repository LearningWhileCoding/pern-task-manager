import Router from 'express-promise-router';
import { signUp, signIn, signOut, getProfile } from '../controllers/auth.controller.js';
import isAuth from '../middlewares/auth.middleware.js';

const router = Router();

// Routes
router.post('/signup', signUp);

router.post('/signin', signIn);

router.post('/signout', signOut);

router.get('/profile', isAuth, getProfile);

export default router;
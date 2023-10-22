import { Router } from "express";
import { signUp, signIn, signOut, getProfile } from "../controllers/auth.controller.js";

const router = Router();

// Routes
router.post('/signup', signUp);

router.post('/signin', signIn);

router.post('/signout', signOut);

router.get('/profile', getProfile);

export default router;
import express from "express";
import { Login, Regitser, logout } from "../controllers/user.js";

const router = express.Router();
router.post('/login', Login)
router.post('/new', Regitser)
router.post('/logout', logout)

export default router;
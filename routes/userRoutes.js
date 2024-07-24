import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';
import { getAllTeam } from '../controllers/teamController.js';

const router = express.Router();

router.get('/users/getAll', getAllUsers);
router.post('/users/create', createUser);
router.get('/team/getAll', getAllTeam);

export default router;

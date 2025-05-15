import { Router } from "express";
import { createTask, getTask, getUserTask, updateTaskStatus } from "../controllers/taskController";


const router = Router();

router.get('/', getTask);
router.post('/' , createTask)
router.patch('/:taskId/status' , updateTaskStatus)
router.get('/user/:userId' , getUserTask)

export default router;


import express from "express";
import {
    getTodos, 
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById
} from "../controllers/TodoController.js";

const router = express.Router();

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.get('/todos/:id', getTodoById);
router.put('/todos/:id', updateTodoById);
router.delete('/todos/:id', deleteTodoById);

export default router;

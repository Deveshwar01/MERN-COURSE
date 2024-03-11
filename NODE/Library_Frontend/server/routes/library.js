import express from "express";
import { addBook, updateBook, removeBook, findBook, displayAllBook } from "../controllers/library.js"
const router = express.Router();
router.post('/addBook', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', removeBook);
router.get('/findBook/:id', findBook);
router.get('/allbooks', displayAllBook);

export default router;
import express from "express";

import { borrowBook, returnBook } from "../controllers/Book.js";

const router = express.Router();

// borrowbook router here  i use patch request because i want to only update one filed 
router.patch('/borrowBook/:id', borrowBook);
// borrow book router
router.patch('/return/:id', returnBook);


export default router;
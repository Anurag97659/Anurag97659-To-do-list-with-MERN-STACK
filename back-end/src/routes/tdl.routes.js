import {Router} from 'express';
import { createTodo,getObjectives,deleteTodo,toggleTodoCompletion } from '../controllers/tdl.controllers.js';
import {verifyJWT} from '../middlewares/auth.middleware.js';


const router=Router();
router.route('/todolist').post(verifyJWT,createTodo);

router.get("/todolist-details", verifyJWT, async (req, res) => {
  try {
    const user = req.user; 
    res.status(200).json({ username: user.username });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});
router.get("/objectives", verifyJWT, getObjectives);
router.post("/delete-todo", verifyJWT, deleteTodo);
router.patch('/update-todo', toggleTodoCompletion);




export default router;
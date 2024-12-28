import {Router} from 'express';
import { createTodo } from '../controllers/tdl.controllers.js';
import {verifyJWT} from '../middlewares/auth.middleware.js';


const router=Router();
router.route('/todolist').post(verifyJWT,createTodo);


export default router;
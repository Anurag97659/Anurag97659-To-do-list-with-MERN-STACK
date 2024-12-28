import {Router} from 'express';
import {  registeruser,
            loginuser,
            logoutuser,
            changeCurrentPassword,
            upateDetails 
} from '../controllers/user.controllers.js';
import {verifyJWT} from '../middlewares/auth.middleware.js';


const router=Router();
router.route('/register').post(registeruser);
router.route('/login').post(loginuser);
router.route('/logout').post(verifyJWT,logoutuser);
router.route('/changePassword').post(verifyJWT,changeCurrentPassword);
router.route('/updateDetails').post(verifyJWT,upateDetails);

export default router;
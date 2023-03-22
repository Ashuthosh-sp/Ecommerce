import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router Object
const router =express.Router();

//routing
//1) Register || METHOD is POST
router.post('/register',registerController)

//LOGIN || POST
router.post('/login',loginController)

//test route

router.get('/test', requireSignIn , isAdmin,testController)

export default router;
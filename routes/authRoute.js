import express from 'express';
import {registerController,loginController,testController, forgotPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router Object
const router =express.Router();

//routing
//1) Register || METHOD is POST
router.post('/register',registerController)

//LOGIN || POST
router.post('/login',loginController)

//forgot password
router.post('/forgot-password',forgotPasswordController)

//test route

router.get('/test', requireSignIn , isAdmin,testController)
 //protected user routes auth

 router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
 });

  //protected admin routes auth

  router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
   res.status(200).send({ok:true});
});
export default router;
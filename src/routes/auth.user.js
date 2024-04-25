import express from 'express'
import userController from "../controllers/user.controller.js";

let router = express.Router()

router.post('/signup',userController.createUser)
router.post('/signin',userController.signin)
router.post('/google',userController.google)
router.get('/signout',userController.signOut)


export default router
import express from 'express';
import authUserRouter from './auth.user.js'
import productRouter from './product.js'

let router = express.Router();

router.use('/auth',authUserRouter)
router.use('/product',productRouter)


export default router
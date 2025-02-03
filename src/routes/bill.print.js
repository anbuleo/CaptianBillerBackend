import express from 'express'
import { verifyToken } from '../uitils/verifyUser.js'
import saleandprintController from '../controllers/saleandprint.controller.js'

const router = express.Router()


router.post('/print',verifyToken,saleandprintController.print)



export default router
import express from 'express'
const router = express.Router();
import UserController from '../controllers/userController.js'

//public routes
// router.get('/api/user', (req, res)=>{
//     res.send("Hello world");
// })

router.post("/register", UserController.userRegistration)
router.post('/verify-email', UserController.verifyEmail)
router.post('/login', UserController.userLogin)


export default router;
import express from 'express';
import { registerUser, loginUser, getUser,logoutUser,updateCurrentDetails} from '../controller/userController.js';
import {upload} from '../middleware/upload.js';
import { protect } from '../middleware/auth.js';
import User from '../models/user.js';

const router = express.Router();

router.route('/register').post( upload.single('photo' ), registerUser);


router.route('/login').post( loginUser);
router.route('/me').get(protect, getUser)
router.route('/logout').post(protect, logoutUser)
router.route('/update').put(protect,updateCurrentDetails)

export default router;
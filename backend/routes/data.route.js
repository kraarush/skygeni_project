import express from 'express'
import { home } from '../controller/data.controller.js';

const router = express.Router();
    
// routes
router.route('/get').get(home);

export default router;
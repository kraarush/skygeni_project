import express from 'express'
import { home } from '../controller/data.controller.js';

const router = express.Router();
    
// making router even for a single route so that the website can scale easily in the future

// routes
router.route('/get').get(home);

export default router;
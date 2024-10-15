import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { add } from '../controllers/Staff.controller.js';
import { getstaff } from '../controllers/Staff.controller.js';
import { Delete } from '../controllers/Staff.controller.js';
import { Getmember } from '../controllers/Staff.controller.js';
import {updatestaff} from "../controllers/Staff.controller.js"


const router = express.Router();

router.post('/add',add);
router.get('/get',getstaff);
router.delete('/delete/:id',Delete);
router.get('/getmember/:id',Getmember);
router.put('/updatemember/:id',updatestaff)

export default router;




// //new



// const express = require('express');
// const Staff = require('../models/Staff'); // Adjust path to your Staff model
// const router = express.Router();

// // Fetch staff details from MongoDB
// router.get('/staff', async (req, res) => {
//   try {
//     const staffMembers = await Staff.find(); // Retrieves all staff documents
//     res.json(staffMembers);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

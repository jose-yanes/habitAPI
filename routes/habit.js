const express = require('express');
const router = express.Router();

const {setHabit, habitStatus } = require('../controllers/habit');


router.post('/setHabit',setHabit);
router.post('/habitStatus',habitStatus);

module.exports = router;
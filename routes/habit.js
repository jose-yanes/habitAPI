const express = require('express');
const router = express.Router();

const {setHabit, habitStatus, getHabit} = require('../controllers/habit');


router.post('/setHabit',setHabit);
router.post('/habitStatus',habitStatus);
router.get('/getHabit',getHabit);

module.exports = router;
const express = require('express');
const router = express.Router();

const {setHabit} = require('../controllers/habit');


router.post('/setHabit',setHabit);

module.exports = router;
const express = require('express');
const router = express.Router();

const {setHabit, updateCount } = require('../controllers/habit');


router.post('/setHabit',setHabit);
router.post('/updateCount',updateCount);

module.exports = router;
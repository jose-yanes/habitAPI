const express = require('express');
const router = express.Router();

const {setHabits} = require('../controllers/habit');


router.get('/',setHabits);

module.exports = router;
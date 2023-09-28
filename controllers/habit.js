const Habit = require('../models/Habit');

const setHabit = async (req,res) =>{
    console.log(req.user);
    req.body.createdBy = req.user.userId;
    const habit = await Habit.create(req.body);
    res.status(200).json({habit});
}

module.exports = {
    setHabit
}
const Habit = require('../models/Habit');

const setHabit = async (req,res) =>{
    req.body.createdBy = req.user.userId;
    const habit = await Habit.create(req.body);
    res.status(200).json({habit});
}

const updateCount = async (req,res) => {
    //receive habit name + true or false
    //change the lastUpdate value to "today"
    
}

module.exports = {
    setHabit,
    updateCount
}
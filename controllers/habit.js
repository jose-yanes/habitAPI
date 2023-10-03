const Habit = require('../models/Habit');

const setHabit = async (req,res) =>{
    req.body.createdBy = req.user.userId;
    const habit = await Habit.create(req.body);
    res.status(200).json({habit});
}

const updateCount = async (req,res) => {
    //receive habit name + true or false
    //change the lastUpdate value to "today"
    //if lastUpdate was yesterday, and today === true; streak++
    const filter = {
        createdBy: req.user.userId,
        name: req.body.name
    };

    const update = {
        $inc: {count:1}
    }

    const updatedHabit = await Habit.findOneAndUpdate(filter,update)
    res.status(200).json({updatedHabit})
}

module.exports = {
    setHabit,
    updateCount
}
const Habit = require('../models/Habit');
const Update = require('../models/Update');

const setHabit = async (req,res) =>{
    //agregar check if already exist
    req.body.createdBy = req.user.userId;
    let habitTrue;

    if(req.body.code){
        console.log(`CODE ${req.body.code} used`)
        habitTrue = await Habit.findOne({
            createdBy: req.user.userId,
            code: req.body.code
        })
    }else if(req.body.name){
        console.log(`name ${req.body.name} used`)
        habitTrue = await Habit.findOne({
            createdBy: req.user.userId,
            name: req.body.name
        })
    };

    if(habitTrue){
        console.log(`Habit ${habitTrue.name} already exists!`)
        res.status(200).json({habitTrue,msg:`Habit was already created, no new habit needed/created`});
        
    }else{
        const habit = await Habit.create(req.body);
        res.status(200).json({habit})  
    }
}

const createUpdate = async (req,res,habitName) => {
    if(!req.body.date){
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        console.log(formattedDate);

        req.body.date = formattedDate;
    }

    habitObj = {
        name: habitName,
        date: req.body.date,
        quantity: req.body.quantity,
        createdBy: req.user.userId,
        status: req.body.status
    };

    const habitUpdate = await Update.findOneAndUpdate(
        {name:habitName,date:req.body.date},
        {quantity:req.body.quantity,status:req.body.status},
        {new:true}
    );

    if(habitUpdate){
        console.log(`habit exist, updating`)
        res.status(200).json({habitUpdate});
    }else{
        console.log(`no habit, creating`)
        const updateHabit = await Update.create(habitObj);
        res.status(200).json({updateHabit})
    }
}

const habitStatus = async (req,res) => {
    //Will check if habit exists on Habit Collection
    //If yes, it will create a new document on the Update Collection
    const filter = {
        createdBy: req.user.userId,
        $or: [{name: req.body.name},{code: req.body.code}]
    };

    const habitTrue = await Habit.findOne(filter);

    if(habitTrue){
        createUpdate(req,res,habitTrue.name);
    }else{
        res.status(400).send(`No habit with name: ${req.body.name} or code: ${req.body.code}`);
    }

};

const getHabit = async (req,res) => {
    const habitTrue = await Habit.findOne({
    })
    res.status(200).json(habitTrue);
}

module.exports = {
    setHabit,
    habitStatus,
    getHabit
}
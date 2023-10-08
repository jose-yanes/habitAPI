const User = require('../models/User');


const register = async (req,res) =>{
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(200).json({ user:{name:user.name}, token});
}

const login = async (req,res) =>{
    const {email,password} = req.body;

    if(!email || !password){
        console.log('Invalid Credentials');
    }

    const user = await User.findOne({email});

    if(!user){
        console.log('Invalid Credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        console.log('Invalid Credentials');
    }

    const token = user.createJWT();
    res.status(200).json({
        user:{name:user.name},
        token
    })
}

module.exports = {
    register,
    login,
}
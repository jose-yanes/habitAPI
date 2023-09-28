const User = require('../models/User');
const jwt = require('jsonwebtoken');

const auth = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        console.log('Authentication invalid');
        //throw error
    }

    const token = authHeader.split(' ')[1];

    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);

        req.user = {
            userId: payload.userId,
            name: payload.name
        }

        next();
    }catch(error){
        console.log(error);
    }
}

module.exports = auth;
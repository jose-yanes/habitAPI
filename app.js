require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

//const authenticateUser

//routers
const authRouter = require('./routes/auth');
const habitRouter = require('./routes/habit');


app.use(express.json());

//routes
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/habits',authenticateUser, habitRouter);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //await connectDB(process.env.MONGO_URI_DEV);
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();
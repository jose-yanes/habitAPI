const express = require('express');
const app = express();

//routers

const habitRouter = require('./routes/habit');

//routes
app.use('/api/v1/habits',habitRouter);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        
    }
}

start();
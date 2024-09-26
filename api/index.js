import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();





mongoose.connect(process.env.MONGO).then(() =>
    {
        console.log("connected to MongoDB!")
    }).catch((err) => 
        {console.log("Error:" +err)});

 const app = express();

 app.use('/api/user', userRouter);

 app.get('/', (req, res) => {
    res.send('Hello World!');
    }
)

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)
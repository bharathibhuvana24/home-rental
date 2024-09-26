import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
dotenv.config();





mongoose.connect(process.env.MONGO).then(() =>
    {
        console.log("connected to MongoDB!")
    }).catch((err) => 
        {console.log("Error:" +err)});

 const app = express();
 app.use(express.json());

 app.use('/api/user', userRouter);
 app.use('/api/auth', authRouter);

 app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });

 app.get('/', (req, res) => {
    res.send('Hello World!');
    }
)

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)
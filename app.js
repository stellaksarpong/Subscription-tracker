import express from 'express';

import {PORT} from './config/env.js';

import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import subscriptionRouter from './routes/subscriptionRoutes.js';
import connectDB from './database/mongodb.js';




const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users/', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API');
});

// Start the server on port 3000
app.listen(PORT, async () => {
    console.log(`Subscription Tracker API  is running on http://localhost:${PORT}`);

    await connectDB();
});

export default app;


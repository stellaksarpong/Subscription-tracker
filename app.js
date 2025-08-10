import express from 'express';

import {PORT} from './config/env.js';


import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import subscriptionRouter from './routes/subscriptionRoutes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('api/v1/users/', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API');
});

// Start the server on port 3000
app.listen(5000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;


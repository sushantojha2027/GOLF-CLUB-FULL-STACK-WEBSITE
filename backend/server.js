import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/userRoute.js';
import adminrouter  from './src/routes/adminRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
}));


app.use('/api/users', router);
app.use('/api/admin', adminrouter)

mongoose.connect(process.env.MONGODB_URL
).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT}`));
}).catch(err => console.error('MongoDB connection error:', err));



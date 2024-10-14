import express from 'express';
import foodRoutes from './routes/food.route.js';

const app = express();

// ... other middleware and configurations ...

app.use('/api/food', foodRoutes);

// ... rest of your server setup ...

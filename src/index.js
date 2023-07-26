import express from 'express';
import listCars from './controllers/listCarsController.js';
const app = express();

app.use(express.json());
app.get('/api/listCars', listCars);

export default app;

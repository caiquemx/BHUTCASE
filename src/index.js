import express from 'express';
import listCars from './controllers/listCars.js';
const app = express();

app.use(express.json());
app.get('/api/listCars', listCars);

export default app;

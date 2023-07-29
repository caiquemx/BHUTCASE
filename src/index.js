import express from 'express';
import listCars from './controllers/listCarsController.js';
import createCar from './controllers/createCarController.js';
import connection from './database/connection.js';

connection(); // connects to DB

const app = express();
app.use(express.json());
app.get('/api/listCars', listCars);
app.post('/api/createCar', createCar);

export default app;

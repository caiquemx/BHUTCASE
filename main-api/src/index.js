import express from 'express';
import listCars from './controllers/listCarsController.js';
import createCar from './controllers/createCarController.js';
import connection from './database/connection.js';
import carNotify from './controllers/carNotify.js';
import {queueProducer} from './queueProducer/producer.js';
import listLogs from './controllers/listLogs.js';

connection(); // connects to DB
queueProducer(); // connects producer

const app = express();
app.use(express.json());
app.get('/api/listCars', listCars);
app.get('/api/logs', listLogs);
app.post('/api/createCar', createCar);
app.post('/api/webhook', carNotify);

export default app;

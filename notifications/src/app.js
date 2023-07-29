import express from 'express';
import sendNotification from './controller/sendNotification.js';

const app = express();

app.post('/api/notification', sendNotification);

export default app;

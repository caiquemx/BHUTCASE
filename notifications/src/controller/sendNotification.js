import {queueConsumer} from '../queueConsumer/consumer.js';
import {consumeNotification} from '../queueConsumer/consumer.js';

const sendNotification = async (_req, res) => {
  try {
    await queueConsumer(); // connects consumer
    await consumeNotification(); // consume queue and send notification to main-api
    res.send();
  } catch (error) {
    console.log(error.message);
  }
};

export default sendNotification;

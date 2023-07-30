import kafka from './client.js';
import axios from 'axios';

const WEBHOOK_ENDPOINT = 'http://localhost:3000/api/webhook';
const consumer = kafka.consumer({groupId: 'car-group'});

export const queueConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({topic: 'car-queue', fromBeginning: true});
};

export const consumeNotification = async () => {
  await consumer.run({
    eachMessage: async ({_topic, _partition, message}) => {
      let notification;
      if (message.value) {
        notification = {notification: 'Carro criado com sucesso'};
      } else {
        notification = {notification: 'Carro ainda não criado'};
      }
      try {
        await axios.post(WEBHOOK_ENDPOINT, notification);
        console.log('notificação enviada com sucesso');
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  await consumer.disconnect();
};

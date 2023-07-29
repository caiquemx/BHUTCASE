import {postCar} from '../utils/fetchCars.js';
import Logs from '../database/model/logsModel.js';
import {sendToQueue} from '../kafkaQueue/producer.js';

const createCarService = async (req) => {
  const response = await postCar(req.body);
  const log = {car_id: response._id, http_method: req.method};
  await Logs.create(log);
  await sendToQueue(response);
  return response;
};

export default createCarService;

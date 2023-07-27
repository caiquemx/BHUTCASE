import mongoose from 'mongoose';

const logsSchema = new mongoose.Schema({
  data_hora: {
    type: Date,
    default: Date.now,
  },
  car_id: {
    type: String,
    required: true,
  },
  http_method: {
    type: String,
    required: true,
  },
});
const Logs = mongoose.model('Logs', logsSchema);

export default Logs;

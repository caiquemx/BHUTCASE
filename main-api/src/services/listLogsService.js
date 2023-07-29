import Logs from '../database/model/logsModel.js';

const listLogsService = async () => {
  const data = await Logs.find();
  return data;
};

export default listLogsService;

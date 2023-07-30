import listLogsService from '../services/listLogsService.js';

const listLogs = async (_req, res) => {
  try {
    const data = await listLogsService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default listLogs;

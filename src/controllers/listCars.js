import fetchCars from '../services/fetchCars.js';
const listCars = async (_req, res) => {
  const cars = await fetchCars();
  try {
    res.status(200).json({cars});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export default listCars;

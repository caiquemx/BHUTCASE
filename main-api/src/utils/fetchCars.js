import axios from 'axios';
const ENDPOINT = 'http://api-test.bhut.com.br:3000/api/cars';
export const fetchCars = async () => {
  const response = await axios.get(ENDPOINT);
  const cars = await response.data;
  return cars;
};

export const postCar = async (payload) => {
  const response = await axios.post(ENDPOINT, payload);
  return response.data;
};

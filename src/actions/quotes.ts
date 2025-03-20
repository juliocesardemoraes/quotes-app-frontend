import axios from "axios";
import { getRandomInt } from "../utils/utils";

export const fetchQuotes = async () => {
  const url = `${import.meta.env.VITE_API_URL}/quotes`;
  console.log(url);

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/quotes`);
  console.log("Response", response);
  return response.data;
};

export const fetchOneQuote = async () => {
  const url = `${import.meta.env.VITE_API_URL}/quotes`;
  console.log(url);

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/quotes`);
  console.log("Response", response);

  const index = getRandomInt(30);
  return response.data[index];
};

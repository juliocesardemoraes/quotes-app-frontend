import axios from "axios";
import { getRandomInt } from "../utils/utils";

export const fetchQuotes = async () => {
  const url = `${import.meta.env.VITE_API_URL}/quotes`;

  const index = getRandomInt(30);

  const response = await axios.get(url);
  return response.data[index];
};

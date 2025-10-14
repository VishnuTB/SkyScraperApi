// networking/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://sky-scrapper.p.rapidapi.com/api/v1",
  headers: {
    "x-rapidapi-key": process.env.EXPO_PUBLIC_API_URL,
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
  },
  timeout: 15000,
});

export default api;

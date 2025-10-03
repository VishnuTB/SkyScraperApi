// networking/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sky-scrapper.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_URL,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  },
  timeout: 15000,
});

export default api;

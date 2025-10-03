// networking/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sky-scrapper.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Key': '8eb40aa9d8msh12bd15052d33998p143b6fjsn66be74ff969b',
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  },
  timeout: 15000,
});

export default api;

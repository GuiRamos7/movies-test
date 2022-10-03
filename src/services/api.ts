import axios from 'axios';

console.log(process.env.REACT_APP_API_KEY);

let tokenStr = process.env.REACT_APP_API_KEY ?? '';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${tokenStr}`,
  },
});

import axios from 'axios';

let tokenStr =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTgyNjYwNzlmMzk1MGJlOWNkNGY4ZDE2MWU4ZDQzMiIsInN1YiI6IjYzMzc5OTJkYzJmZjNkMDA3ZDkzNWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bwy5JHVEyjwqMEXRkPhIgYN8nK9vvCC0fdJ-EcBsCQE';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${tokenStr}`,
  },
});

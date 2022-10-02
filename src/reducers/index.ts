import { createSlice } from '@reduxjs/toolkit';

export const popularMovies = createSlice({
  name: 'movies',
  initialState: {
    movieSelected: null,
  },
  reducers: {
    selectMovie: (state, action) => {
      console.log(action);
      state.movieSelected = action.payload;
    },
  },
});

export const { selectMovie } = popularMovies.actions;

export default popularMovies.reducer;

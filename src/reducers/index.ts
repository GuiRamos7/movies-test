import { createSlice } from '@reduxjs/toolkit';

export const popularMovies = createSlice({
  name: 'popularMovies',
  initialState: {
    movieSelected: null,
  },
  reducers: {
    selectMovie: (state, action) => {
      state.movieSelected = action.payload;
    },
  },
});

export const { selectMovie } = popularMovies.actions;

export default popularMovies.reducer;

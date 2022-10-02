import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFavorite {
  title: string;
  image: string;
  id: number;
}

interface IMoviesState {
  movieSelected: number | null;
  favorites: IFavorite[];
}

// Define the initial state using that type
const initialState: IMoviesState = {
  movieSelected: null,
  favorites: [],
};

export const popularMovies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.movieSelected = action.payload;
    },
    addFavorites: (state, action: PayloadAction<IFavorite>) => {
      const newArray: Array<IFavorite> = state.favorites;
      newArray.push(action.payload);
      state.favorites = newArray;
    },
    removeFavorites: (state, action: PayloadAction<number>) => {
      const newArray: Array<IFavorite> = state.favorites.filter(
        (el) => el.id !== action.payload
      );
      state.favorites = newArray;
    },
  },
});

export const { selectMovie, addFavorites, removeFavorites } =
  popularMovies.actions;

export default popularMovies.reducer;

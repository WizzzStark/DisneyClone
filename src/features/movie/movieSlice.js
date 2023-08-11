import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommended: null,
    newDisney: null,
    soon: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommended = action.payload.recommended;
            state.newDisney = action.payload.newDisney;
            state.soon = action.payload.soon;
        },
    }
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended = (state) => state.movie.recommended;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectSoon = (state) => state.movie.soon;

export default movieSlice.reducer;
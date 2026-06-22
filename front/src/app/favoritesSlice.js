import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: JSON.parse(localStorage.getItem('favorites')) || []
    },
    reducers: {
        toggleFavorite: (state, action) => { 
            const watch = action.payload;
          
            const exists = state.items.find(item => item.id === watch.id);

            if (exists) {
                state.items = state.items.filter(item => item.id !== watch.id);
            } else {
                state.items.push(watch);
            }
            localStorage.setItem('favorites', JSON.stringify(state.items));
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
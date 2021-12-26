/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Pokemon from '../../models/Pokemon';


const initialState: Pokemon = {
    id: 0,
    name: '',
    image: '',
    height: 0,
    weight: 0,
    };

// create the slice
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<Pokemon>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.image = action.payload.image;
            state.height = action.payload.height;
            state.weight = action.payload.weight;
        },
    }
});

export const { setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk('posts', async (value) => {
    const search = value || 'indian'
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&page=1`)
    return res.data
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        search: '',
        movies: [],
        loading: true,
        error: null
    },

    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false,
                    state.movies = action.payload,
                    state.error = action.payload.Error
            })
            .addCase(getMovies.rejected, (state) => {
                state.loading = false,
                    state.error = 'Movies not Found '
            })
    }
})

export default moviesSlice.reducer
export const { setSearch } = moviesSlice.actions



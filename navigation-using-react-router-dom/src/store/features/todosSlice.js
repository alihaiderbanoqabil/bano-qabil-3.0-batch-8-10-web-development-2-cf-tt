import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    todos: [],
    error: '',
};

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    (url) => {
        console.log(url, 'url');

        return axios(url || 'https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                return response.data;
            })
            .catch((error) => error);
    }
);

const todosSlice = createSlice({
    initialState,
    name: 'todos',
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, { type, payload }) => {
            state.isLoading = false;
            console.log('payload', payload);

            state.todos = payload;
        });
        builder.addCase(fetchTodos.rejected, (state, { type, payload }) => {
            console.log('payload ..', payload);
            state.isLoading = false;
            state.error = payload.message;
        });
    },
});

export default todosSlice.reducer;
export const todosActions = todosSlice.actions;
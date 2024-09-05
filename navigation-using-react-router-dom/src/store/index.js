import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todosSlice'
import cakeReducer from './features/cakeSlice'
import { jsonplaceholderApi } from './features/apiSlice'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,

        todos: todosReducer,
        cake: cakeReducer
    }, // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
})
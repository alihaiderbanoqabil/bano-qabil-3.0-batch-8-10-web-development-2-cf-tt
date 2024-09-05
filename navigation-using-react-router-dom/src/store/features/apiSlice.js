import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonplaceholderApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (querySting) => {
                return `posts${querySting}`
            },
        }),
        getComments: builder.query({
            query: (querySting) => {
                return `comments${querySting}`
            },
        })
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useLazyGetPostsQuery, useGetCommentsQuery, useLazyGetCommentsQuery } = jsonplaceholderApi



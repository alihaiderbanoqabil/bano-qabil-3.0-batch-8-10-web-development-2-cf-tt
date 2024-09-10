import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonplaceholderApi = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        prepareHeaders: (headers, { getState }) => {
            // const token = getState().auth.token
            const token = localStorage.getItem('token')
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Post', 'User', 'Comment', 'Todo', 'Album', 'Photo'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (querySting) => {
                return `posts${querySting || ''}`
            },
            providesTags: ['Post'],
        }),
        getComments: builder.query({
            query: (querySting) => {
                return `comments${querySting}`
            },
            providesTags: ['Comment'],
        }),
        addPost: builder.mutation({
            query: (data) => {
                console.log(data, 'data');
                return { url: `posts`, body: data, method: 'POST', headers: { 'Authorization': `Bearer TOKEN` } }
            },
            invalidatesTags: ['Post'],
        }),
        updateComment: builder.mutation({
            query: (data) => {
                console.log(data, 'data');
                return { url: `comments/${data.id}`, body: data, method: 'PUT', headers: { 'Authorization': `Bearer TOKEN` } }
            },
            invalidatesTags: ['Comment'],
        })
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPostsQuery,
    useLazyGetPostsQuery,
    useGetCommentsQuery,
    useLazyGetCommentsQuery,
    useAddPostMutation
} = jsonplaceholderApi



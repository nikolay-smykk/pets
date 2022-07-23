import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/posts' }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'posts',
        }),
    }),
})

export const usePostsApiQuey = postsApi

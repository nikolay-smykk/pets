import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['GET_POSTS'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Posts', id })),
                          { type: 'Posts', id: 'LIST' },
                      ]
                    : [{ type: 'Posts', id: 'LIST' }],
        }),
        addPost: builder.mutation({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
    }),
})

export const { useGetPostsQuery, useAddPostMutation } = postsApi

// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     endpoints: (builder) => ({
//       getPokemonByName: builder.query<Pokemon, string>({
//         query: (name) => `pokemon/${name}`,
//       }),
//     }),
//   })

//   // Export hooks for usage in functional components, which are
//   // auto-generated based on the defined endpoints
//   export const { useGetPokemonByNameQuery } = pokemonApi

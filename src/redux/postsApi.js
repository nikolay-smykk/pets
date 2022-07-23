import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
    }),
})

export const { useGetPostsQuery } = postsApi

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

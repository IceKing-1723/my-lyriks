import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=POP&country_code=DZ',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8237bf3eb4mshff99fb92700ef99p14afaejsn5b53119fbf31');
            return headers;
        }
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: '/charts/world'}),
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;
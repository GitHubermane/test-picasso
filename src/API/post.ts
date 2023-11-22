import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], { limit: number; page: number }>({
      query: ({ limit, page }) => `posts?_page=${page}&_limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = postApi;

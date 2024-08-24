import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
    // baseUrl: "http://localhost:7000/api/v1",
  }),
  tagTypes: ["reviews", "menu", "orders", "users", "accounts", "cart"],
  endpoints: () => ({}),
});

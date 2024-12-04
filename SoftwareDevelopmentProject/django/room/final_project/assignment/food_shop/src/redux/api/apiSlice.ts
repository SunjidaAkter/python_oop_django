import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://food-backend-ohlq.onrender.com/",
    baseUrl: "https://food-backend-zeta.vercel.app/",
    // baseUrl: "http://localhost:7000/api/v1",
    // baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: [
    "reviews",
    "menu",
    "orders",
    "users",
    "accounts",
    "cart",
    "wishlist",
    "transaction",
  ],
  endpoints: () => ({}),
});

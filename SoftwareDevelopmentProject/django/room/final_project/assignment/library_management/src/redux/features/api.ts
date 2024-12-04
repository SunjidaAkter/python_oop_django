import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBookList: builder.query({
      query: () => ({
        url: "/book/list",
      }),
      providesTags: ["book"],
    }),
    getGenre: builder.query({
      query: () => "/genre/list",
    }),
    getUserAccountList: builder.query({
      query: () => ({
        url: "/user_account/list",
      }),
      providesTags: ["account"],
    }),
    getUserList: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["user"],
    }),
    getAuthorList: builder.query({
      query: () => ({
        url: "/author/list",
      }),
      providesTags: ["author"],
    }),
    getWishlistList: builder.query({
      query: () => ({
        url: "/wishlist",
      }),
      providesTags: ["wishlist"],
    }),
    getBorrowList: builder.query({
      query: () => ({
        url: "/borrow",
      }),
      providesTags: ["borrow"],
    }),
    getReviewList: builder.query({
      query: () => ({
        url: "/book/reviews",
      }),
      providesTags: ["reviews"],
    }),
    getBook: builder.query({
      query: (options) => ({
        url: "/book/list",
        params: {
          cuisine__name: options?.cuisine__name,
          category__name: options?.category__name,
          title: options?.title,
        },
      }),
      providesTags: ["book"],
    }),
    getReviews: builder.query({
      query: (id) => ({
        url: `/book/reviews/?book_id=${id}`,
      }),
      providesTags: ["reviews"],
    }),
    getBorrow: builder.query({
      query: (id) => ({
        url: `/borrow/?borrower_id=${id}`,
      }),
      providesTags: ["borrow"],
    }),

    getWishlist: builder.query({
      query: (id) => ({
        url: `/wishlist/?customer_id=${id}`,
      }),
      providesTags: ["wishlist"],
    }),
    singleBook: builder.query({
      query: (id) => ({
        url: `/book/list/${id}`,
      }),
      providesTags: ["book"],
    }),
    singleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["user"],
    }),
    singleUserAccount: builder.query({
      query: (id) => ({
        url: `/user_account/list/${id}`,
      }),
      providesTags: ["account"],
    }),
    updateAccount: builder.mutation({
      query: (options) => ({
        url: `/user_account/list/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["account"],
    }),
    updateBorrow: builder.mutation({
      query: (options) => ({
        url: `/borrow/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["borrow"],
    }),

    updateWishlist: builder.mutation({
      query: (options) => ({
        url: `/wishlist/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    postTransaction: builder.mutation({
      query: (data) => ({
        url: "/transaction/account_transaction/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["transaction"],
    }),
    postBorrow: builder.mutation({
      query: (data) => ({
        url: "/borrow/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["borrow"],
    }),
    postReview: builder.mutation({
      query: (options) => ({
        url: `/book/reviews/?book_id=${options?.id}`,
        method: "POST",
        body: options?.data,
      }),
      invalidatesTags: ["reviews"],
    }),
    postWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `/wishlist/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteBorrow: builder.mutation({
      query: (id) => ({
        url: `/borrow/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["borrow"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/list/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});
export const {
  useUpdateAccountMutation,
  useUpdateBorrowMutation,
  useUpdateWishlistMutation,
  usePostWishlistMutation,
  usePostTransactionMutation,
  usePostReviewMutation,
  usePostBorrowMutation,
  useSingleBookQuery,
  useSingleUserQuery,
  useSingleUserAccountQuery,
  useGetWishlistQuery,
  useGetReviewsQuery,
  useGetBorrowQuery,
  useGetBookQuery,
  useGetUserListQuery,
  useGetBorrowListQuery,
  useGetReviewListQuery,
  useGetUserAccountListQuery,
  useGetWishlistListQuery,
  useGetBookListQuery,
  useGetGenreQuery,
  useGetAuthorListQuery,
  useDeleteWishlistMutation,
  useDeleteBookMutation,
  useDeleteBorrowMutation,
} = bookApi;

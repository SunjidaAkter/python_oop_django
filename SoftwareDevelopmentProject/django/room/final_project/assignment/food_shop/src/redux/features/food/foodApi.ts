import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getTopBooks: builder.query({
    //   query: () => "/books",
    //   providesTags: ["status"],
    // }),
    getMenuList: builder.query({
      query: () => ({
        url: "/menu/list",
        provideTags: ["menu"],
      }),
    }),
    getCategory: builder.query({
      query: () => "/menu/category",
    }),
    getCuisine: builder.query({
      query: () => "/menu/cuisine",
    }),
    getUserAccountsList: builder.query({
      query: () => "/user_accounts/list",
    }),
    getUserList: builder.query({
      query: () => "/users",
    }),
    getCartList: builder.query({
      query: () => "/cart",
    }),
    getWishlistList: builder.query({
      query: () => "/wishlist",
    }),
    getOrderList: builder.query({
      query: () => "/orders",
    }),
    getMenu: builder.query({
      query: (options) => ({
        url: "/menu/list",
        params: {
          cuisine__name: options?.cuisine__name,
          category__name: options?.category__name,
          title: options?.title,
        },
      }),
      providesTags: ["menu"],
    }),
    getReviews: builder.query({
      query: (id) => `/menu/reviews/?menu_id=${id}`,
      providesTags: ["reviews"],
    }),
    getSingleReview: builder.query({
      query: (id) => `/books/reviews/?menu_id=${id}`,
      providesTags: ["reviews"],
    }),
    getOrder: builder.query({
      query: (id) => `/orders/?customer_id=${id}`,
      providesTags: ["orders"],
    }),
    getCart: builder.query({
      query: (id) => `/cart/?customer_id=${id}`,
      providesTags: ["cart"],
    }),
    getWishlist: builder.query({
      query: (id) => `/wishlist/?customer_id=${id}`,
      providesTags: ["wishlist"],
    }),
    singleMenu: builder.query({
      query: (id) => `/menu/list/${id}`,
      providesTags: ["menu"],
    }),
    singleUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),
    singleUserAccount: builder.query({
      query: (id) => `/user_accounts/list/${id}`,
      providesTags: ["accounts"],
    }),
    updateAccount: builder.mutation({
      query: (options) => ({
        url: `/user_accounts/list/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["accounts"],
    }),
    updateOrder: builder.mutation({
      query: (options) => ({
        url: `/orders/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["orders"],
    }),
    updateCart: builder.mutation({
      query: (options) => ({
        url: `/cart/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["cart"],
    }),
    updateWishlist: builder.mutation({
      query: (options) => ({
        url: `/wishlist/${options?.id}/`,
        method: "PATCH",
        body: options?.data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    postOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
    postReview: builder.mutation({
      query: (options) => ({
        url: `/menu/reviews/?menu_id=${options?.id}`,
        method: "POST",
        body: options?.data,
      }),
      invalidatesTags: ["reviews"],
    }),
    postCart: builder.mutation({
      query: (data) => ({
        url: `/cart/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    postWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `/wishlist/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteMenu: builder.mutation({
      query: (id) => ({
        url: `/menu/list/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["menu"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),
    // postRead: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/read-list/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: [],
    // }),
    // postWish: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/wish-list/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: [],
    // }),
    // updateStatus: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/read-status/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["status"],
    // }),
    // postStatus: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/books/read-status",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: [],
    // }),
  }),
});
export const {
  useUpdateAccountMutation,
  useUpdateOrderMutation,
  useUpdateCartMutation,
  useUpdateWishlistMutation,
  usePostCartMutation,
  usePostWishlistMutation,
  usePostReviewMutation,
  usePostOrderMutation,
  useSingleMenuQuery,
  useSingleUserQuery,
  useSingleUserAccountQuery,
  useGetCartQuery,
  useGetWishlistQuery,
  useGetReviewsQuery,
  useGetOrderQuery,
  useGetMenuQuery,
  useGetUserListQuery,
  useGetOrderListQuery,
  useGetUserAccountsListQuery,
  useGetCartListQuery,
  useGetWishlistListQuery,
  useGetMenuListQuery,
  useGetCategoryQuery,
  useGetCuisineQuery,
  useDeleteCartMutation,
  useDeleteWishlistMutation,
  useDeleteMenuMutation,
  useDeleteOrderMutation,
  //   usePostReadMutation,
  //   usePostStatusMutation,
  //   useUpdateStatusMutation,
  //   usePostWishMutation,
} = bookApi;

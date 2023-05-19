import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (token) => ({
        url: "/contact",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    getSingleContact: builder.query({
      query: ({id,token}) => ({
        url: `/contact/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    getCreateUser: builder.mutation({
      query: ({ user, token }) => ({
        url: "/contact",
        method: "POST",
        body: user,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, user, token }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: user,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ id, token }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetSingleContactQuery,
  useGetCreateUserMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-backend-url.com/api' }),
  reducerPath: 'api',
  tagTypes: ['Contact', 'Media', 'Give'],
  endpoints: (builder) => ({
    // Contact Us Form Submission
    submitContactForm: builder.mutation({
      query: (formData) => ({
        url: '/contact',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Contact'],
    }),

    // Media Transactions
    getMediaTransactions: builder.query({
      query: () => '/media/transactions',
      providesTags: ['Media'],
    }),

    // Media Views
    getMediaViews: builder.query({
      query: () => '/media/views',
      providesTags: ['Media'],
    }),

    // Give Page Donation Submission
    submitDonation: builder.mutation({
      query: (donationData) => ({
        url: '/give',
        method: 'POST',
        body: donationData,
      }),
      invalidatesTags: ['Give'],
    }),
  }),
});

export const {
  useSubmitContactFormMutation,
  useGetMediaTransactionsQuery,
  useGetMediaViewsQuery,
  useSubmitDonationMutation,
} = api;

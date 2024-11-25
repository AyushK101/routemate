import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, common } from "../../constants";
// import { ErrorResponse } from "../../types";

type createRouteType = {
  statusCode: number;
  message: string;
  data: {
    userId: string;
    name: string;
    source: string;
    destination: string;
    gender: string;
    travelDate: string;
    year: string;
    mode: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  success: boolean;
};

type findRouteType = {
  statusCode: number;
  message: string;
  data: Array<{
    _id: string;
    userId: string;
    name: string;
    source: string;
    destination: string;
    gender: string;
    travelDate: string;
    year: string;
    mode: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }>;
  success: boolean;
};

type deleteRouteType = {
  statusCode: number;
  message: string;
  data: {
    acknowledged: boolean;
    deletedCount: number;
  };
  success: boolean;
};

/**
 * @TagNotes
 * 1.
 */

export const routemateApi = createApi({
  reducerPath: "routemateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URI,
    mode: "cors",
    credentials: "include",
  }),
  tagTypes: ["onRouteCreate"],
  endpoints: (builder) => ({
    createRouteApi: builder.mutation<createRouteType, common.routeSchemaType>({
      query: (data) => ({
        url: "/rm/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["onRouteCreate"],
    }),
    findRouteApi: builder.query<findRouteType, common.findRouteSchemaType>({
      query: (data) => {
        const { destination, gender, mode, source, travelDate, year } = data;
        return {
          url: `/rm/find?source=${source}&destination=${destination}&gender=${gender}&travelDate=${travelDate}&mode=${mode}&year=${year}`,
          method: "GET",
        };
      },
      providesTags: ["onRouteCreate"],
    }),
    deleteRouteApi: builder.mutation<deleteRouteType, { _id: string }>({
      query: (data) => ({
        url: "/rm/delete",
        method: "POST",
        body: data,
      }),
    }),
    getAllUserRoutes: builder.query({
      query: () => "/rm/all",
    }),
  }),
});

export const {
  useCreateRouteApiMutation,
  useDeleteRouteApiMutation,
  useFindRouteApiQuery,
  useGetAllUserRoutesQuery,
  useLazyFindRouteApiQuery,
  useLazyGetAllUserRoutesQuery,
} = routemateApi;

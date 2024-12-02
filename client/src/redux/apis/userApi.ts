import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, common } from "../../constants";
import { unsetSearchTable } from "../slices/searchSlice";
import { logoutUserSlice } from "../slices/userSlice";
//! /react -> automatically generate react hooks corresponding to endpoints


//? generic type of query and mutation <return,body>
export interface ServerResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  success: boolean;
}

export interface getCurrentUserApiType {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


type registerApiType =  {
  statusCode: number
  message: string
  data: {
    _id: string
    username: string
    email: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  success: boolean
}

type loginApiType =  {
  statusCode: number
  message: string
  data: {
    user: {
      _id: string
      username: string
      email: string
      createdAt: string
      updatedAt: string
      __v: number
    }
  }
  success: boolean
}

type deleteUserApiType =  {
  statusCode: number
  message: string
  data: {
    deleteResponse: {
      acknowledged: boolean
      deletedCount: number
    }
    checkUser: {
      _id: string
      username: string
      email: string
      password: string
      createdAt: string
      updatedAt: string
      __v: number
    }
  }
  success: boolean
}




export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URI ,
    credentials: 'include',
    // prepareHeaders: (headers) => {
    //   headers.set('Accept','application/json')
    //   return headers;
    // }
  }),
  keepUnusedDataFor: 0 ,//! in dev mode disable caching in whole api but in production disable caching in get as it should always be fresh with fresh cookies as it is used for authentication.  
  tagTypes: ['currentUser'],
  endpoints: (builder) => {
    return {
      getCurrentUserApi: builder.query<ServerResponse<getCurrentUserApiType>,string>({
        query: () => ({
          url: '/user/get',
          method: 'GET',
        }),
        providesTags: ['currentUser'],

        // transformResponse: (response: ServerResponse<getCurrentUserApiType>) => {
        //   return response.data;
        // }
      }),
      registerApi: builder.mutation<registerApiType,{credentials: string}>({
        query: (data: {credentials: string}) => ({
          url: "/user/signup",
          method: 'POST',
          body: data,
        }),

      }),

      loginUserApi: builder.mutation<loginApiType,{credentials: string}>({
        query: (data: {credentials: string}) => ({
          url: "/user/login",
          method: 'POST',
          body: data
        }),
        invalidatesTags: ['currentUser']
      }),
      deleteUserApi: builder.mutation<deleteUserApiType,common.loginSchemaType>({
        query: (data) => ({
          url: "/user/delete",
          method: 'DELETE',
          body: data
        }),
        invalidatesTags: ['currentUser']
      }),
      logoutUserApi: builder.mutation({
        query: () => ({
          url: '/user/logout',
          method: 'POST',
        }),
        async onQueryStarted(_, {queryFulfilled, dispatch, getCacheEntry}) {
          await queryFulfilled
          console.log(getCacheEntry());
          dispatch(unsetSearchTable())
          dispatch(logoutUserSlice(false))
        }
      })
    }

  }
})

// auto-generated react hooks
export const { 
  // useDeleteUserApiMutation,
  useGetCurrentUserApiQuery,
  useLazyGetCurrentUserApiQuery,
  useLoginUserApiMutation,
  useRegisterApiMutation,
  useLogoutUserApiMutation,
 } = userApi
import { UserLoginResponseType } from "./reduxTypes"

export type {
  UserLoginResponseType,
  
}

// Defining a type for the generic error response
export type ErrorResponse = {
  statuscode: number;
  message: string | undefined;
  error: string | undefined;
  stack: string | undefined;
};

// You may also define a success response for your createRouteApi mutation if needed
export type CreateRouteApiResponse = {
  data: unknown; // Adjust the type based on what data you're receiving
  // Add other response fields as necessary
};


export interface genericResponseType<T> {
  statusCode: number,
  message: string,
  data: T,
  success: boolean

}

export interface genericErrorType<T> {
  statusCode: number,
  data: null
  message: string,
  errors: T
}


interface routeType {
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

export type tableDataType = Omit<routeType,"userId" | "_id" | "createdAt" | "updatedAt" | "__v"> & {
  routeId: string
}

export type findAllRouteResponseType = genericResponseType<routeType[]>

//! can omit "userId" also @TODO if contact feature not made
export type SearchRouteTableType = Omit<routeType,"_id" | "createdAt" | "updatedAt" | "__v">


export interface customErrorForResponseTable {
  data: {
    error: {correctUser: string},
    message: string,
    stack: string,
    statusCode: number
  },
  status: number
}

export type SendMailType = genericResponseType<string>


export type LoginErrorType = {
  data: {
    statusCode: number,
    message: string,
    stack: string
  },
  status: number
}
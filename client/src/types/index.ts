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

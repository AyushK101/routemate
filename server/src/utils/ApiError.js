// export interface ApiErrorType extends Error {
//   statusCode: number;
//   message: string;
//   error?: Error | string;
//   stack?: string;
//   success: boolean;
// }

export default class ApiError extends Error{
  constructor(
    statusCode, 
    message,
    errors,
    stack,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data=null
    this.message = message;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
    this.success = false;
  }
}

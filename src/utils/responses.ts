import { Response } from "express";
interface SuccessResponse<T> {
    status: boolean;
    message: string;
    data?: T;
    statusCode?:number
    total_records?: number;
  }
  
  interface ErrorResponse<T> {
    status: boolean;
    message: string;
    error: T | string;
  }
  export const sendSuccessResponse = (
    res: Response,
    message: string,
    data?: any,
    total_records?: number
  ): void => {
    const response: SuccessResponse<any> = {
      status: true,
      message,
      data,
      total_records,
    };
    res.status(200).json(response);
  };
  
  export const sendErrorResponse = (
    res: Response,
    message: string,
    status = 500,
    data?: any,
    error?: Error | string
  ): void => {
    const response: ErrorResponse<Error> = {
      status: false,
      message,
      ...data,
      error,
    };
    res.status(status).json(response);
  };
  
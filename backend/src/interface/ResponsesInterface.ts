import { FormResultType } from '../types/FormType';

export interface Status {
  status: number;
}

export interface Error {
  error: string;
}

export interface ResponseError extends Status {
  response: Error;
}

export interface ResponseFormResult extends Status {
  response: FormResultType
}
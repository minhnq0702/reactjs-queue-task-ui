export interface TApi<T> {
  status: string;
  data: T[];
  count?: number;
  total?: number;
}

export type MyError = string | object;
export type ErrorMessage = string | string[] | null;
export type ErrorAdditional = object | null;

export interface IError {
  code: number;
  error: MyError;
  message: ErrorMessage;
  additional?: ErrorAdditional;
}

export interface IPaginationQuery {
  page: number;
  limit: number;
}

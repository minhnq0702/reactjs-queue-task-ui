export interface TApi<T> {
  status: string;
  data: T[];
}

export type MyError = string | object;
export type ErrorMessage = string | string[] | null;
export type ErrorAdditional = object | null;

export interface TError {
  code: number;
  error: MyError;
  message: ErrorMessage;
  additional?: ErrorAdditional;
}

import { IError } from '@/models/TApi';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';

const API_PREFIX = '/api';
const API_VERSION = ''; // * or /v1

export interface CustomContext {
  raiseError: boolean;
}

const defaultContext: CustomContext = {
  raiseError: true,
};

export type InternalAxiosConfigWithCtx = InternalAxiosRequestConfig & CustomContext;

/**
 * Add context to axios request
 * @param ctx custom context
 * @param config axios request config
 * @returns axios request config
 */
export const withContext = (ctx: CustomContext = defaultContext, config?: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    ...defaultContext,
    ...ctx,
    ...(config ? config : {}),
  };
};

class HTTP {
  static instance: HTTP;
  private _client: AxiosInstance;

  constructor() {
    this._client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    // * add interceptors for request
    this._client.interceptors.request.use((config) => {
      // * add token here
      config.url = this.getURL(config.url?.toString() ?? '');

      config.withCredentials = true;
      return config;
    });

    // * add interceptors for response
    this._client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        this.processError(error);
        return Promise.reject(error);
      },
    );

    if (!HTTP.instance) {
      HTTP.instance = this;
    }
    return HTTP.instance;
  }

  get client() {
    return this._client;
  }

  /**
   * Join API prefix and version
   * /api + /v1 + /url
   * @param url api endpoint
   * @returns full endpiont
   */
  private getURL(url: string): string {
    return `${API_PREFIX}${API_VERSION}${url}`;
  }

  private processError(err: unknown) {
    // ? should throw toast directly here?
    if (err instanceof AxiosError) {
      const _config: InternalAxiosConfigWithCtx = err.config as InternalAxiosConfigWithCtx;
      if (_config.raiseError === false) return;

      if (err.response) {
        const errData: IError = err.response.data as IError;
        if (Array.isArray(errData.message)) {
          errData.message.forEach((msg) => toast.error(msg));
          return;
        }
        const _msg = errData.error;
        if (typeof _msg === 'object') {
          toast.error(JSON.stringify(_msg));
          return;
        }
        toast.error(_msg);
        return;
      }
    }

    // * default error
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
}

export default HTTP.instance || new HTTP();

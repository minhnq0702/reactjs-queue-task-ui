import { IError } from '@/models/TApi';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'sonner';

const API_PREFIX = '/api';
const API_VERSION = ''; // * or /v1

class HTTP {
  static instance: HTTP;
  private _client: AxiosInstance;

  constructor() {
    this._client = axios.create({
      baseURL: import.meta.env.VITE_API_URL as string,
    });

    // * add interceptors for request
    this._client.interceptors.request.use((config) => {
      // * add token here
      config.url = this.getURL(config.url?.toString() ?? '');
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
      if (err.response) {
        const errData: IError = err.response.data as IError;
        if (errData.message !== '') {
          if (Array.isArray(errData.message)) {
            errData.message.forEach((msg) => toast.error(msg));
            return;
          }
          toast.error(errData.message);
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

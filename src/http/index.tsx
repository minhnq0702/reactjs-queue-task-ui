import { TError } from '@/models/TApi';
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
        const errData: TError = err.response.data as TError;
        toast.error(errData.message);
        return;
      }
    }

    // * default error
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }

  public async get<T>(url: string) {
    return this._client.get<T>(this.getURL(url)).catch((err: unknown) => {
      this.processError(err);
      return Promise.reject(err);
    });
  }

  public async post(url: string, data?: unknown) {
    return this._client.post(this.getURL(url), data).catch((err: unknown) => {
      this.processError(err);
      return Promise.reject(err);
    });
  }
}

export default HTTP.instance || new HTTP();

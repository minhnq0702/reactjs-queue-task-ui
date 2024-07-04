import axios, { AxiosInstance } from 'axios';

const API_PREFIX = '/api';
const API_VERSION = ''; // * or /v1

class HTTP {
  static instance: HTTP;
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL as string,
    });
    if (!HTTP.instance) {
      HTTP.instance = this;
    }
    return HTTP.instance;
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

  public async get(url: string): Promise<string> {
    const response = await this.client.get(this.getURL(url));
    return response.statusText;
  }

  public async post(url: string, data?: unknown): Promise<string> {
    const response = await this.client.post(this.getURL(url), data);
    return response.statusText;
  }
}

export default HTTP.instance || new HTTP();

import axios, { AxiosInstance } from 'axios';

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

  public async get(url: string): Promise<string> {
    console.log('GET', HTTP.instance.client.defaults.baseURL + url);
    const response = await this.client.get(url);
    return response.statusText;
  }

  public async post(url: string, data?: unknown): Promise<string> {
    console.log('POST', HTTP.instance.client.defaults.baseURL + url);
    const response = await this.client.post(url, data);
    return response.statusText;
  }
}

export default HTTP.instance || new HTTP();

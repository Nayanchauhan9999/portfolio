import axios, { AxiosInstance } from "axios";

export interface IApiClient {
  get<TResponse>(path: string): Promise<TResponse>;
  post<TRequest, TResponse>(path: string, body: TRequest): Promise<TResponse>;
  patch<TRequest, TResponse>(path: string, body: TRequest): Promise<TResponse>;
  put<TRequest, TResponse>(path: string, body: TRequest): Promise<TResponse>;
}

export class ApiClient implements IApiClient {
  private client: AxiosInstance;

  protected createAxiosClient(): AxiosInstance {
    return axios.create({
      baseURL: "/api/",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  constructor() {
    this.client = this.createAxiosClient();
  }

  async post<TRequest, TResponse>(
    path: string,
    body: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.post<TResponse>(path, body);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }

  async get<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.client.get<TResponse>(path);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }
  async patch<TRequest, TResponse>(
    path: string,
    body: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.patch<TResponse>(path, body);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }

  async put<TRequest, TResponse>(
    path: string,
    body: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(path, body);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }
}

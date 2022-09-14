import axios, { AxiosError, AxiosInstance, Method } from 'axios';
import HttpClient from './HttpClient';
import HttpMethod from './HttpMethod';
import HttpRequest from './HttpRequest';
import HttpResponse from './HttpResponse';
import Exception from '../Exception/Exception';

interface Props {
  baseUrl?: string;
}

class AxiosHttpClient extends HttpClient {
  private client: AxiosInstance;

  constructor(props?: Props) {
    super({
      baseUrl: props?.baseUrl
    });

    this.client = axios.create({
      baseURL: this._baseUrl
    });
  }

  toAxiosMethod(method: HttpMethod): Method {
    switch (method) {
      case HttpMethod.GET:
        return 'GET';
      case HttpMethod.POST:
        return 'POST';
      case HttpMethod.PATCH:
        return 'PATCH';
      case HttpMethod.PUT:
        return 'PUT';
      case HttpMethod.DELETE:
        return 'DELETE';
      default:
        return 'GET';
    }
  }

  sendRequest = <B, D>(request: HttpRequest<B>): Promise<D> => {
    const { method, headers, url, endpoint = '', params } = request;

    let selectedUrl = '';
    if (url) {
      selectedUrl = url;
    } else {
      selectedUrl = `${this._baseUrl}/${endpoint}`;
    }

    if (method === HttpMethod.GET && params) {
      params['api_key'] = process.env.REACT_APP_API_KEY ?? '';
      params['format'] = 'json';

      selectedUrl += '?' + HttpClient.toQueryString(params);
    }

    return new Promise<D>((resolve, reject) => {
      this.client
        .request<HttpResponse<D>>({
          method: this.toAxiosMethod(method),
          url: selectedUrl,
          headers: headers ?? {}
        })
        .then((axiosResponse) => {
          if (axiosResponse.status === 200 || axiosResponse.status === 204) {
            resolve(axiosResponse.data as unknown as D);
          } else {
            reject();
          }
        })
        .catch((axiosError: AxiosError) => {
          if (axiosError.response) {
            reject(HttpClient.codeToException(axiosError.response.status, 'Terjadi kesalahan'));
          } else {
            reject(new Exception(`Tidak berhasil: ${axiosError.message}`));
          }
        });
    });
  };
}

export default AxiosHttpClient;

import HttpRequest from "./HttpRequest";
import Exception from "../Exception/Exception";

interface Props {
  baseUrl?: string;
}

abstract class HttpClient {
  protected _baseUrl: string;

  protected constructor(props: Props) {
    const {baseUrl} = props;
    this._baseUrl = baseUrl ?? process.env.REACT_APP_API_URL ?? '';
  }

  abstract sendRequest: <B, D>(request: HttpRequest<B>) => Promise<D>;

  static toQueryString = (params: { [key: string]: string }) => {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  }

  static getCleanBody = (body?: any) => {
    if (!body) return;
    const cleanBody = body;

    for (const [key, value] of Object.entries(cleanBody)) {
      if (value === null || value === undefined) {
        delete cleanBody[key];
      }
    }

    return cleanBody;
  }

  static codeToException = (code: number, message: any): Exception => {
    switch (code) {
      case 401:
      case 403:
      case 404:
      case 422:
      case 500:
      default:
        return new Exception(message, code);
    }
  }
}

export default HttpClient;

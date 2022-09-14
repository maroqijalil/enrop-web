import HttpMethod from "./HttpMethod";

interface HttpRequest<B> {
  method: HttpMethod,
  url?: string;
  endpoint?: string,
  headers?: any,
  additionalHeaders?: any,
  params?: { [key: string]: any },
  body?: B,
}

export default HttpRequest;

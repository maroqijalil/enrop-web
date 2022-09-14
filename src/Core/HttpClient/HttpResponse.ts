interface HttpResponse<D> {
  code: number;
  status: string;
  message: string | string[];
  data: D;
}

export default HttpResponse;

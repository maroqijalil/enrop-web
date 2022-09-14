class Exception {
  private readonly _message: string;
  private readonly _code: number;

  constructor(message: string, code?: number) {
    this._message = message;
    this._code = code ?? 0;
  }

  get message(): string {
    return this._message;
  }

  get code(): number {
    return this._code;
  }
}

export default Exception;

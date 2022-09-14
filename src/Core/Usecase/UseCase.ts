abstract class UseCase<P = any | undefined, R = any> {
  abstract execute: (request: P) => R;
}

export default UseCase;

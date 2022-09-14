abstract class Asset {
  abstract get path(): string;

  get localUrl() {
    const baseUrl = `${process.env.REACT_APP_URL}`;
    return `${baseUrl}/assets/${this.path}`;
  }
}

export default Asset;

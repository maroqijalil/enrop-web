import Route from '../Navigation/Route';

interface Module {
  name: string;
  routes: { [key: string]: Route };
}

export default Module;

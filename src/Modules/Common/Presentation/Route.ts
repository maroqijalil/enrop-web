import Route from '../../../Core/Navigation/Route';
import FooModule from '../../Foo/Module';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';

const CommonRoute = {
  HOME_PAGE: new Route({
    path: '/',
    title: 'Home',
    component: HomePage,
  }),
  NOT_FOUND_PAGE: new Route({
    path: '*',
    title: 'Not Found',
    component: NotFoundPage
  })
};

export default CommonRoute;

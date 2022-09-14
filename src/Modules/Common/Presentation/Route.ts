import Route from '../../../Core/Navigation/Route';
import HomePage from './Pages/Home/HomePage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

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

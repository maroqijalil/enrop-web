import Route from '../../../Core/Navigation/Route';
import FooPage from './Pages/FooPage';

const FooRoute = {
  FOO_PAGE: new Route({
    path: 'foo',
    title: 'Foo',
    component: FooPage
  })
};

export default FooRoute;

import { Routes, Route as RouteComponent } from 'react-router-dom';
import { useMemo } from 'react';
import Route from './Route';
import Modules from '../Config/Modules';
import HeadComponent from '../../Modules/Common/Presentation/Components/Layouts/HeadComponent';

const AppRouter = () => {
  const routes = useMemo(() => {
    const results: Route[] = [];

    for (const [, module] of Object.entries(Modules)) {
      for (const [, route] of Object.entries(module.routes)) {
        results.push(route);
      }
    }

    return results;
  }, []);

  const buildElement = (route: Route) => {
    const { title, path, component: Component, needAuth } = route;

    return (
      <HeadComponent path={path} title={title}>
        <Component />
      </HeadComponent>
    );
  };

  return (
    <Routes>
      {routes.map((route, index) => (
        <RouteComponent key={index} path={route.path} element={buildElement(route)} />
      ))}
    </Routes>
  );
};

export default AppRouter;

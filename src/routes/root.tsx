import * as React from 'react';
import { Route, RouteProps, BrowserRouter, Switch } from 'react-router-dom';

const SliderPage = React.lazy(() => import('../pages/slider/main'));
const RegisterPage = React.lazy(() => import('../pages/register/register'));
const Map = React.lazy(() => import('../pages/war/map'));

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <Switch>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Route exact path="/" component={SliderPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/map" component={Map} />
      </React.Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;

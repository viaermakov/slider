import * as React from 'react';
import { Route, RouteProps, BrowserRouter, Switch } from 'react-router-dom';

const SliderPage = React.lazy(() => import('../pages/slider/slider'));

const Routes: React.FC<RouteProps> = () => (
  <BrowserRouter>
    <Switch>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Route exact path="/" component={SliderPage} />
      </React.Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;

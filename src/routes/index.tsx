import { createBrowserRouter } from 'react-router-dom';
import LApp from '../layout/LApp';
import LRoot from '../layout/LRoot';
import App from '../pages/App';
import PDashboard from '../pages/Dashboard';
// import PLogin from '../pages/Login';
// import PTask from '../pages/PTasks';
import { lazy } from 'react';
import PTest from '../pages/Test';

const PLogin = lazy(() => import('../pages/PLogin').then((module) => ({ default: module.default })));
const PTask = lazy(() => import('../pages/PTasks').then((module) => ({ default: module.default })));
const PMessage = lazy(() => import('../pages/PMessage').then((module) => ({ default: module.default })));

const AppRouter = createBrowserRouter([
  {
    element: <LRoot allowSearch={false} />,
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <PLogin />,
      },
    ],
  },
  {
    // path: "/",
    element: <LRoot allowSearch={true} />,
    children: [
      {
        element: <LApp />,
        children: [
          {
            path: '/',
            element: <App />,
          },
          {
            path: '/dashboard',
            element: <PDashboard />,
          },
          {
            path: '/tasks',
            element: <PTask />,
          },
          {
            path: '/messages',
            element: <PMessage />,
          },
          {
            path: '/test',
            element: <PTest />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;

import { createBrowserRouter } from 'react-router-dom';
import LApp from '../layout/LApp';
import LRoot from '../layout/LRoot';
import App from '../pages/App';
import PDashboard from '../pages/Dashboard';
import PLogin from '../pages/Login';
import PTask from '../pages/PTasks';
import PTest from '../pages/Test';

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
            path: '/test',
            element: <PTest />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LApp from '../layout/LApp';
import LRoot from '../layout/LRoot';
import PLogin from '../pages/PLogin';
import PTest from '../pages/PTest';

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
            path: '/test',
            element: <PTest />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;

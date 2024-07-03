import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LApp from '../layout/LApp';
import LRoot from '../layout/LRoot';
import PLogin from '../pages/PLogin';
import PTest from '../pages/PTest';

const AppRouter = createBrowserRouter([
  {
    // path: "/",
    element: <LRoot />,
    children: [
      {
        path: '/login',
        element: <PLogin />,
      },
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

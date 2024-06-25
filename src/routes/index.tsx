import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LRoot from "../layout/LRoot";

const AppRouter = createBrowserRouter([
  {
    // path: "/",
    element: <LRoot/>,
    children: [
      {
        path: '/',
        element: <App/>,
      }
    ]
  },
]);

export default AppRouter

import { createBrowserRouter } from "react-router-dom";

import { allBookLoader } from "../Pages/HomePage";

import App from "../App";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
        loader: allBookLoader,
      },
    ],
  },
]);

export default router;

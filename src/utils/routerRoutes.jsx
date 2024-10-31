import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/BookDetails";

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
      },
      {
        path: "book/:book_key",
        element: <BookDetails />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/BookDetails";
import LinkedPage from "../Pages/LinkedPage";

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
      {
        path: "linked-books",
        element: <LinkedPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;

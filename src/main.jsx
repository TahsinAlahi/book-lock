import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import router from "./utils/routerRoutes.jsx";
import { BookProvider } from "./Contexts/BookContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </BookProvider>
  </StrictMode>
);

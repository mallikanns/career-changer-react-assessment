import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import HomeUser from "./Home-user";
import HomeAdmin from "./Home-admin";
import Owner from "./Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <HomeUser />,
  },
  {
    path: "/admin",
    element: <HomeAdmin />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

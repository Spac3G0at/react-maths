import React from "react";
import { Navigate, useRoutes } from "react-router";
import NavLayout from "./layout/NavLayout";
import Courses from "./pages/Courses/Courses";
import Exercises from "./pages/Exercises/Exercises";
import Home from "./pages/Home/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/app",
      element: <NavLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/exercises",
          element: <Exercises />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "*",
          element: <Navigate to="/home" replace />,
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/app/home" replace />,
    },
  ]);
}

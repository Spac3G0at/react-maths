import React from "react";
import { Navigate, useRoutes } from "react-router";
import MultiplicationsContext from "./contexts/MultiplicationsContext";
import NavLayout from "./layout/NavLayout";
import Courses from "./pages/Courses/Courses";
import MultiplicationsTable from "./pages/Courses/MultiplicationsTable.tsx/MultiplicationsTable";
import Exercises from "./pages/Exercises/Exercises";
import Home from "./pages/Home/Home";
import MultiplicationsPage from "./pages/Multiplications/MultiplicationsPage";

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
          children: [
            {
              path: "/",
              element: <Exercises />,
            },
            {
              path: "/multiplications",
              element: (
                <MultiplicationsContext>
                  <MultiplicationsPage />
                </MultiplicationsContext>
              ),
            },
          ],
        },
        {
          path: "/courses",
          children: [
            {
              path: "",
              element: <Courses />,
            },
            {
              path: "/tables",
              element: <MultiplicationsTable />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Navigate to="/app/home" replace />,
        },
        {
          path: "*",
          element: <Navigate to="/app/home" replace />,
        },
      ],
    },
  ]);
}

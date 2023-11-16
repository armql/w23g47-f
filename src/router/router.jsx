import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../layouts/NotFound";
import GuestLayout from "../layouts/GuestLayout";
import ClientLayout from "../layouts/ClientLayout";
import EmployeeLayout from "../layouts/EmployeeLayout";
import Home from "../views/home/Home";
import TestingPage from "../components/custom/TestingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "test",
        element: <TestingPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <ClientLayout />,
    children: [],
  },
  {
    path: "/workspace",
    element: <EmployeeLayout />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

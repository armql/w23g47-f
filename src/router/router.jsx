import { Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home, TestingPage, FlightBooking } from "./imports/Global";
import ClientLayout from "../layouts/ClientLayout";
import NotFound from "../layouts/NotFound";
import GuestLayout from "../layouts/GuestLayout";
import EmployeeLayout from "../layouts/EmployeeLayout";
import LazyLoading from "../layouts/LazyLoader";

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
        path: "search/flights",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <FlightBooking />
          </Suspense>
        ),
      },
      {
        path: "test",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <TestingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/app",
    element: (
      <ClientLayout>
        <Suspense fallback={<LazyLoading />}>
          {/* Lazy load other components for ClientLayout */}
          {/* Example:
          <LazyLoadedComponent /> */}
        </Suspense>
      </ClientLayout>
    ),
    children: [],
  },
  {
    path: "/workspace",
    element: (
      <EmployeeLayout>
        <Suspense fallback={<LazyLoading />}>
          {/* Lazy load other components for EmployeeLayout */}
          {/* Example:
          <LazyLoadedComponent /> */}
        </Suspense>
      </EmployeeLayout>
    ),
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

import { lazy } from "react";

const Home = lazy(() => import("../../views/home/Home"));
const TestingPage = lazy(() => import("../../components/custom/TestingPage"));
const FlightBooking = lazy(
  () => import("../../views/features/booking/FlightBooking"),
);

export { Home, TestingPage, FlightBooking };

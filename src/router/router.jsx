import { createBrowserRouter } from "react-router-dom";
import NotFound from "../layouts/NotFound";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

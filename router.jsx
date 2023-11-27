import { createBrowserRouter } from "react-router-dom";
import MonitoringPage from "./src/pages/MonitoringPage";
import Overview from "./src/pages/Overview";
import Home from "./src/pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/monitoring",
        element: <MonitoringPage />,
      },
    ],
  },
]);

export default router;

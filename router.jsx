import { createBrowserRouter } from "react-router-dom";
import MonitoringPage1 from "./src/pages/MonitoringPage1";
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
        element: <MonitoringPage1 />,
      },
    ],
  },
]);

export default router;

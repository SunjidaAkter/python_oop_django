import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import App from "../App";
import Details from "../pages/Details";
import Profile from "../pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Wraps content in MainLayout
    children: [
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;

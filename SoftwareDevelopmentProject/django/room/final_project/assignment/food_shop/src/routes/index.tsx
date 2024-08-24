import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import App from "../App";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Discount from "../pages/Discount";
import Cuisins from "../pages/Cuisins";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";
import AdminProfile from "../components/Dashboard/AdminProfile";
import ManageHistory from "../components/Dashboard/ManageHistory";
import AddMenu from "../components/Dashboard/AddMenu";
import ManageMenu from "../components/Dashboard/ManageMenu";

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
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "cart/:id",
        element: <Cart />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/discount",
        element: <Discount />,
      },
      {
        path: "/cuisines",
        element: <Cuisins />,
      },
    ],
  },
  {
    path: "/dashboard/", // Root path
    element: <Dashboard />, // Wraps content in MainLayout
    children: [
      {
        index: true, // Default route for "/"
        element: <AdminProfile />,
      },
      {
        path: "history",
        element: <ManageHistory />,
      },
      {
        path: "add_menu",
        element: <AddMenu />,
      },
      {
        path: "manage_menu",
        element: <ManageMenu />,
      },
    ],
  },
]);

export default routes;

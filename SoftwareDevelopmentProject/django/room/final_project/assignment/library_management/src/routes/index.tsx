import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import App from "../App";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import Booklist from "../components/ui/home/Booklist";
import About from "../components/ui/home/About";
import Wishlist from "../pages/Wishlist";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import History from "../pages/History";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import ManageBook from "../pages/ManageBook";
import MyHistory from "../pages/MyHistory";
import EditProfile from "../pages/EditProfile";

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
        path: "register/",
        element: <Register />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "books/",
        element: <Booklist />,
      },
      {
        path: "wishlist/",
        element: <Wishlist />,
      },
      {
        path: "login/",
        element: <Login />,
      },
      {
        path: "/details/:id",
        element: <Detail />,
      },
      {
        path: "edit_profile/:id",
        element: <EditProfile />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard/", // Root path
    element: <Dashboard />, // Wraps content in MainLayout
    children: [
      {
        index: true, // Default route for "/"
        element: <Admin />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "add_book",
        element: <AddBook />,
      },
      {
        path: "edit_book/:id",
        element: <EditBook />,
      },
      {
        path: "my_history",
        element: <MyHistory />,
      },
      {
        path: "manage_book",
        element: <ManageBook />,
      },
    ],
  },
]);

export default routes;

import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div
        style={{ backgroundPosition: "100% 8%" }}
        className="hero bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1920)] bg-no-repeat bg-cover"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-10 flex-col">
          <p className="text-[36px] font-bold text-white text-center">
            Dashboard
          </p>
          <p className="text-[20px] text-white font-semibold text-center">
            Home/Dashboard
          </p>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          ></label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/dashboard/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/add_menu"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Add Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage_menu"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Manage Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/history"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Manage History
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

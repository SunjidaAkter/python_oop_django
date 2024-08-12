// export default Nav;
import { useState } from "react";
import userIcon from "../../assets/man.png";
import wishlistIcon from "../../assets/heart.png";
import shoppingIcon from "../../assets/shopping-bag.png";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      {/* Main Navbar */}
      <div className="navbar bg-base-100 lg:px-16 md:px-10 px-6 py-6">
        <div className="navbar-start">
          {/* Mobile Menu Icon */}
          <button onClick={toggleSidebar} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <img
            src="https://yummi-theme.myshopify.com/cdn/shop/files/logo_3.png?v=1623913640&width=80"
            alt="Logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deshi"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Deshi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/indian"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Indian
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/italian"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Italian
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/thai"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Thai
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chinese"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Chinese
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex">
          <img
            className="w-[30px] h-[30px] ml-5"
            src={userIcon}
            alt="User Icon"
          />
          <img
            className="w-[30px] h-[30px] ml-5"
            src={wishlistIcon}
            alt="Wishlist Icon"
          />
          <img
            className="w-[30px] h-[30px] ml-5"
            src={shoppingIcon}
            alt="Shopping Bag Icon"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-base-100 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={closeSidebar}
          className="p-4 text-xl font-semibold text-right w-full"
        >
          &times;
        </button>
        <ul className="p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeSidebar}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/deshi"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeSidebar}
            >
              Deshi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/indian"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeSidebar}
            >
              Indian
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/italian"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeSidebar}
            >
              Italian
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/thai"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeSidebar}
            >
              Thai
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chinese"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeSidebar}
            >
              Chinese
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

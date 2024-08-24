import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/man.png";
import wishlistIcon from "../../assets/heart.png";
import shoppingIcon from "../../assets/shopping-bag.png";
import "../../App.css";
import {
  useGetUserAccountsListQuery,
  useSingleUserQuery,
} from "../../redux/features/food/foodApi";
import { IUser } from "../../types/globalType";
import Swal from "sweetalert2";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userImage, setUserImage] = useState(userIcon);
  const userToken = localStorage.getItem("token"); // Check if user is logged in
  const userId = localStorage.getItem("user_id"); // Check if user is logged in

  const {
    data: user,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useSingleUserQuery(userId);
  const {
    data: userList,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useGetUserAccountsListQuery(undefined);
  console.log(userId);
  const filteredUser = userList?.find((SingleUser: IUser) => {
    return SingleUser?.user === user?.username;
  });
  console.log(filteredUser);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // Set the user image if the user is logged in
  useEffect(() => {
    const filteredUser = userList?.find(
      (SingleUser: IUser) => SingleUser?.user === user?.username
    );
    if (userId && filteredUser?.image) {
      setUserImage(filteredUser.image);
    }
  }, [userList, user, userId]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setDropdownOpen(false);

    // Show success message
    Swal.fire({
      title: "Logged out!",
      text: "You have successfully logged out.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset user image to default
    setUserImage(userIcon);
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
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cuisines"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Cuisins
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/discount"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Discount
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex relative">
          {/* User Icon with Dropdown */}
          <div className="relative">
            <img
              className="w-[30px] h-[30px] ml-5 cursor-pointer"
              src={userId ? userImage : userIcon}
              alt="User Icon"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-30">
                {userToken && userId ? (
                  <>
                    <NavLink
                      to={`/profile/${filteredUser.id}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
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
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cuisines"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Cuisins
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discount"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Discount
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

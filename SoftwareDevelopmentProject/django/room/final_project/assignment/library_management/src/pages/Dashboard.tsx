import { NavLink, Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import {
  MdHistory,
  MdManageHistory,
  MdOutlineAdminPanelSettings,
  //   MdOutlineFastfood,
} from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import logo from "../assets/logo2.png";
import { useEffect, useState } from "react";
import { IoBookOutline } from "react-icons/io5";

const Dashboard = () => {
  // const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#e7e9eb",
        /* Replace with your image path */
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="py-[22.5px]"
    >
      {loading ? (
        <div
          style={{
            backgroundColor: "#e7e9eb",
            /* Replace with your image path */
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
          // className="py-[22.5px]"
          className="fixed inset-0 flex items-center justify-center"
        >
          <div className="flex justify-center"></div>
          <img className="sm:w-[100px] w-[50px]" src={logo} alt="" />
          <p className="text-[[#4c453c]] sm:text-[100px] text-[50px] caveat">
            Loading...
          </p>
          {/* Replace this with your loading spinner */}
        </div>
      ) : (
        <>
          <Navbar />

          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center relative">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="font-semibold drawer-button lg:hidden text-center mt-[-30px] text-[20px] caveat p-2 shadow-2xl text-[#4c453c] rounded"
              >
                {" "}
                DashBoard Manubar
              </label>
              <Outlet />
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="bg-white ml-0 lg:ml-10 lg:rounded-lg rounded-none text-base-content min-h-full w-80 px-12 py-12 z-50">
                {/* Sidebar content here */}
                <li className="caveat mt-5 mb-5">
                  <NavLink
                    to="/dashboard/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link2 active flex justify-start items-center "
                        : "nav-link2 flex justify-start items-center "
                    }
                  >
                    <MdOutlineAdminPanelSettings className="mr-2" />
                    Admin Profile
                  </NavLink>
                </li>
                <hr />
                <li className="caveat mt-5 mb-5">
                  <NavLink
                    to="/dashboard/add_book"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link2 active flex justify-start items-center "
                        : "nav-link2 flex justify-start items-center "
                    }
                  >
                    <RiMenuAddLine className="mr-2" />
                    Add Book
                  </NavLink>
                </li>
                <hr />
                <li className="caveat mt-5 mb-5">
                  <NavLink
                    to="/dashboard/manage_book"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link2 active flex justify-start items-center "
                        : "nav-link2 flex justify-start items-center "
                    }
                  >
                    <IoBookOutline className="mr-2" />
                    Manage Book
                  </NavLink>
                </li>
                <hr />
                <li className="caveat mt-5 mb-5">
                  <NavLink
                    to="/dashboard/history"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link2 active flex justify-start items-center "
                        : "nav-link2 flex justify-start items-center "
                    }
                  >
                    <MdManageHistory className="mr-2" />
                    Manage History
                  </NavLink>
                </li>
                <hr />
                <li className="caveat mt-5 mb-5">
                  <NavLink
                    to="/dashboard/my_history"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link2 active flex justify-start items-center "
                        : "nav-link2 flex justify-start items-center "
                    }
                  >
                    <MdHistory className="mr-2" />
                    My History
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Dashboard;

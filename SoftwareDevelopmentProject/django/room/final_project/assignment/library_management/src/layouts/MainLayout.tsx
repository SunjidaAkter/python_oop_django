import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
import logo from "../assets/logo2.png";
const MainLayout = () => {
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
        // backgroundColor: "#ba9f88",
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
            backgroundColor: "#fef5e6",
            // backgroundColor: "#e7e9eb",
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
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;

import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logged from "../assets/register.png";

const getValue = (id: string): string => {
  const element = document.getElementById(id) as HTMLInputElement | null;
  return element ? element.value : "";
};

const Login: React.FC = () => {
  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");

    if (username && password) {
      try {
        const response = await fetch(
          "https://library-management-server-tp1n.vercel.app/user_account/login/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          }
        );
        const data = await response.json();

        if (response.ok && data.token && data.user_id) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          Swal.fire({
            title: "Success!",
            text: "Login successful. Redirecting...",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            confirmButtonColor: "#837162",
          }).then(() => {
            window.location.href = "https://bookit-library.netlify.app";
          });
        } else {
          Swal.fire({
            title: "Login Failed",
            text: data.message || "Invalid credentials",
            icon: "error",
            confirmButtonColor: "#837162",
            confirmButtonText: "Try Again",
          });
        }
      } catch (error) {
        console.error("Error during login:", error);
        Swal.fire({
          confirmButtonColor: "#837162",
          title: "Error",
          text: "An error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } else {
      Swal.fire({
        confirmButtonColor: "#837162",
        title: "Input Error",
        text: "Please provide both username and password.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="m-10 lg:px-32 px-10 md:px-10 pt-5 pb-5 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg">
        <p className="text-center text-[#4c453c] caveat text-[24px] md:text-[70px] font-bold">
          Login
        </p>
        <div className="lg:flex lg:flex-row flex flex-col justify-center items-center lg:w-full w-full md:w-[75%] ">
          <div className="lg:w-1/2 w-0 hidden lg:flex justify-center items-center">
            <div className="w-[80%] mx-auto">
              <img className="w-full rounded-lg " src={logged} alt="" />
            </div>
          </div>
          <form
            onSubmit={handleLogin}
            className="mx-auto w-full lg:px-10 px-5 py-0  lg:w-[50%] bg-white md:my-10 my-0 bg-opacity-95 rounded-lg"
          >
            <label className="form-control w-full my-5">
              <input
                id="login-username"
                type="text"
                placeholder="Username"
                className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                id="login-password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
              />
            </label>
            <div className="my-3">
              <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center">
                <div>
                  <p className="font-bold text-2xl caveat text-[#4c453c]">
                    Admin Credential
                  </p>
                  <p className=" font-normal caveat text-[#4c453c]">
                    <span className="font-bold ">Username :</span> Sunjida_Akter
                  </p>
                  <p className=" font-normal caveat text-[#4c453c]">
                    <span className="font-bold">Password :</span> 1212@asas
                  </p>
                </div>
                <div>
                  <p className="font-bold text-2xl caveat text-[#4c453c]">
                    Reader Credential
                  </p>
                  <p className=" font-normal caveat text-[#4c453c]">
                    <span className="font-bold ">Username :</span>{" "}
                    Sunjida_Akter1
                  </p>
                  <p className=" font-normal caveat text-[#4c453c]">
                    <span className="font-bold">Password :</span> 1212@asas
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-5">
              <Link to="/register">
                <p className="text-[#4c453c] text-[14px] font-semibold">
                  Don't Have An Account?
                </p>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#837162] text-white text-[15px] font-semibold rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

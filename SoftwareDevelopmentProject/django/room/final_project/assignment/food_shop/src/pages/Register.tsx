import { FormEvent } from "react";
import Swal from "sweetalert2";
import spoons from "../assets/pngwing.com.png";
import shwarma from "../assets/pngwing.com (2).png";
import { Link } from "react-router-dom";

const handleRegistration = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const getValue = (id: string): string =>
    (document.getElementById(id) as HTMLInputElement).value;

  const getFile = (id: string): File | null =>
    (document.getElementById(id) as HTMLInputElement).files?.[0] || null;

  const username = getValue("username");
  const first_name = getValue("first_name");
  const last_name = getValue("last_name");
  const email = getValue("email");
  const password = getValue("password");
  const confirm_password = getValue("confirm_password");
  const mobile_no = getValue("mobile_no");
  const address = getValue("address");
  const image = getFile("image");

  if (password === confirm_password) {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirm_password", confirm_password);
      formData.append("mobile_no", mobile_no);
      formData.append("address", address);
      if (image) {
        formData.append("image", image);
      }

      fetch("http://127.0.0.1:8000/user_accounts/register/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            text: !data.success
              ? `${data.message || JSON.stringify(data)}`
              : "Registration successful.",
            confirmButtonText: "OK",
            confirmButtonColor: "#C00A27",
          });
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          Swal.fire({
            title: "Error!",
            text: `${error.message}`,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#C00A27",
          });
        });
    } else {
      Swal.fire({
        title: "Password Error",
        text: "Password must contain eight characters, at least one letter, one number, and one special character.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  } else {
    Swal.fire({
      title: "Password Mismatch",
      text: "Password and confirm password do not match.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  }
};

const Register = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundPosition: "100% 8%" }}
        className="hero bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1920)] bg-no-repeat bg-cover"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-10 flex-col">
          <p className="text-[36px] font-bold text-white text-center">
            Account
          </p>
          <p className="text-[20px] text-white font-semibold text-center">
            Home/Register
          </p>
        </div>
      </div>
      <div className="relative">
        <form
          onSubmit={handleRegistration}
          className="mx-auto w-full md:w-[75%] lg:w-[50%] bg-white mb-10 mt-10 bg-opacity-95 shadow-2xl rounded-lg"
        >
          <div className="px-10 md:px-20 lg:px-28 py-14">
            <p className="mb-5 text-center text-[#3a3a3a] text-[24px] md:text-[30px] font-bold">
              Register
            </p>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="text"
                placeholder="First Name"
                id="first_name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="text"
                placeholder="Last Name"
                id="last_name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="text"
                placeholder="Phone Number"
                id="mobile_no"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="text"
                placeholder="Address"
                id="address"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="file"
                placeholder="Image Files"
                id="image"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirm_password"
                className="input input-bordered w-full"
              />
            </label>
            <div className="flex justify-center mb-5">
              <Link to="/login">
                <p className="text-gray-500 text-[14px] font-semibold">
                  Already Have An Account?
                </p>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#C00A27] text-white text-[15px] font-semibold rounded-md"
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <div className="absolute top-0 right-0 w-[30%] md:w-[25%] lg:w-[30%] -z-10">
          <img src={spoons} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 w-[30%] md:w-[25%] lg:w-[30%] -z-10">
          <img src={shwarma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;

import { FormEvent } from "react";
import Swal from "sweetalert2";
import spoons from "../assets/login1.png";
// import shwarma from "../assets/pngwing.com (2).png";
import { Link } from "react-router-dom";

const handleRegistration = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const getValue = (id: string): string =>
    (document.getElementById(id) as HTMLInputElement).value;

  // const getFile = (id: string): File | null =>
  //   (document.getElementById(id) as HTMLInputElement).files?.[0] || null;

  const username = getValue("username");
  const image = getValue("image");
  const first_name = getValue("first_name");
  const last_name = getValue("last_name");
  const email = getValue("email");
  const password = getValue("password");
  const confirm_password = getValue("confirm_password");
  const mobile_no = getValue("mobile_no");
  const address = getValue("address");
  // const image = getFile("image");

  if (password === confirm_password) {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("image", image);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirm_password", confirm_password);
      formData.append("mobile_no", mobile_no);
      formData.append("address", address);
      // if (image) {
      //   formData.append("image", image);
      // }

      fetch(
        "https://library-management-server-tp1n.vercel.app/user_account/register/",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            text: !data.success
              ? `${data.message || JSON.stringify(data)}`
              : "Registration successful.",
            confirmButtonText: "OK",
            confirmButtonColor: "#837162",
          });
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          Swal.fire({
            title: "Error!",
            text: `${error.message}`,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#837162",
          });
        });
    } else {
      Swal.fire({
        title: "Password Error",
        text: "Password must contain eight characters, at least one letter, one number, and one special character.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#837162",
      });
    }
  } else {
    Swal.fire({
      confirmButtonColor: "#837162",
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
      <div className="m-10 lg:px-24 px-10 pt-5 pb-16 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg">
        <p className="text-center text-[#4c453c] caveat text-[24px] md:text-[70px] font-bold">
          Register
        </p>
        <div className="lg:flex lg:flex-row flex flex-col w-full lg:w-full md:w-[90%] justify-center items-center ">
          <div className="lg:w-1/2  mt-[-150px] w-0 hidden lg:flex justify-center items-center">
            <div className="w-[80%]  mx-auto">
              <img className="w-full rounded-lg" src={spoons} alt="" />
            </div>
          </div>
          <form
            onSubmit={handleRegistration}
            className="mx-auto w-full md:w-[75%] lg:w-[50%] bg-[white]  bg-opacity-95 rounded-lg"
          >
            <div className="px-5 md:px-10 lg:px-12 pt-[10px] pb-0">
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="text"
                  placeholder="Phone Number"
                  id="mobile_no"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="url"
                  placeholder="Image URL"
                  id="image"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
                />
              </label>
              <label className="form-control w-full my-3 md:my-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirm_password"
                  className="input input-bordered w-full  border-x-0 border-t-0 border-dashed border-b-[2px] rounded-xl bg-[white] focus:bg-[white] active:bg-[white]"
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
                  className="px-6 py-3 bg-[#837162] text-white text-[15px] font-semibold rounded-md"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="absolute top-0 right-0 w-[30%] md:w-[25%] lg:w-[30%] -z-10">
          <img src={spoons} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 w-[30%] md:w-[25%] lg:w-[30%] -z-10">
          <img src={shwarma} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Register;

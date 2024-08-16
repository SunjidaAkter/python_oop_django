import spoons from "../assets/pngwing.com.png";
import shwarma from "../assets/pngwing.com (2).png";
const Register = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundPosition: "100% 8%" }}
        className="hero bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1920)] bg-no-repeat bg-cover "
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
      <div className="relative ">
        <div className="mx-auto w-[50%] z-0 bg-white mb-10 mt-20 bg-opacity-95 shadow-2xl rounded-lg">
          <div className="px-28 py-14  ">
            <p className="mb-5 text-center text-[#3a3a3a] text-[30px] font-bold">
              Register
            </p>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <div className="flex justify-center mb-5">
              {/* <p className="text-gray-500 text-[14px] font-semibold">
                Forgot Password?
              </p> */}
              <p className="text-gray-500 text-[14px] font-semibold">
                Already Have An Account?
              </p>
            </div>
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-[#C00A27] text-white text-[15px] font-semibold rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 -z-10">
          <img className="" src={spoons} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 -z-10">
          <img className="" src={shwarma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Fade } from "react-awesome-reveal";
import bg_img from "../../assets/1.png";
const Subscribe = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("${bg_img}")` }}
    >
      <div className="bg-[black] bg-opacity-55 backdrop-blur-0 w-full">
        <div className="w-[70%] mx-auto text-center text-white py-40 ">
          <Fade cascade duration={1000} direction="up">
            <p className="text-[30px] font-bold mb-3">Newsletter</p>
          </Fade>
          <Fade cascade duration={1000} direction="up">
            <p className="text-[20px] font-normal my-5">
              Will be used in accordance with our Privacy policy!
            </p>
          </Fade>
          <Fade cascade duration={1000} direction="up">
            <div className="w-[50%] mt-10 join">
              <input
                className="w-full  input rounded-none"
                placeholder="Your Email Address"
              />
              <button className="btn font-semibold rounded-none bg-[#C00A27] hover:bg-yellow-500 hover:text-[#3A3A3A] transition-all duration-500 border-none text-white">
                SUBSCRIBE
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

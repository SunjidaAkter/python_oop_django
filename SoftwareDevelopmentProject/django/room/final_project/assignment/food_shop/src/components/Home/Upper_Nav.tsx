import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone-call.png";

const Upper_Nav = () => {
  return (
    <div className="bg-[#f4b618] px-16 py-4 z-40">
      <div className="lg:flex lg:flex-row lg:justify-start md:flex md:flex-row md:justify-start flex flex-col">
        <div className="flex items-center">
          <img
            className="lg:w-[25px] lg:h-[20px] md:w-[25px] md:h-[20px] w-[20px] h-[15px] mt-1 mr-2"
            src={emailIcon}
            alt=""
          />
          <p className="lg:text-[20px] md:text-[20px] text-[15px] hover:text-[#93051c] font-medium mr-5">
            0000-123456789
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="lg:w-[25px] lg:h-[20px] md:w-[25px] md:h-[20px] w-[20px] h-[15px] mt-1 mr-2"
            src={phoneIcon}
            alt=""
          />
          <p className="lg:text-[20px] md:text-[20px] text-[15px] hover:text-[#93051c] font-medium">
            sample@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upper_Nav;

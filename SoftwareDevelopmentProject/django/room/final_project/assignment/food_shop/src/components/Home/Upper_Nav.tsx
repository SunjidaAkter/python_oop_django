import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone-call.png";

const Upper_Nav = () => {
  return (
    <div className="bg-[#f4b618] px-16 py-4 ">
      <div className="flex justify-start">
        <img className="w-[25px] h-[20px] mt-1 mr-2" src={emailIcon} alt="" />
        <p className="text-[20px] hover:text-[#93051c] font-medium mr-5">
          0000-123456789
        </p>
        <img className="w-[18px] h-[20px] mt-1 mr-2" src={phoneIcon} alt="" />
        <p className="text-[20px] hover:text-[#93051c] font-medium">
          sample@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Upper_Nav;

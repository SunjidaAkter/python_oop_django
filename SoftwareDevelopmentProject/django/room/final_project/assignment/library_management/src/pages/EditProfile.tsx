import { AiOutlineUserAdd } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";

const EditProfile = () => {
  return (
    <div className="card lg:card-side bg-white lg:flex lg:flex-row flex flex-col justify-between items-center rounded-lg lg:mx-10 mx-5 shadow-xl py-[50px] lg:px-[200px] px-0  sm:px-0">
      {/* {filteredUserAccount?.image_url ? ( */}
      {/* <figure className="rounded-full lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]">
          <img
            src={filteredUserAccount?.image_url}
            className="rounded-full w-full h-full object-cover"
            alt="Profile"
          />
        </figure>
      ) : ( */}
      <figure className="rounded-full">
        <AiOutlineUserAdd className="lg:h-[300px] lg:w-[300px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] text-[#4c453c] rounded-full border-[5px] border-[#837162]" />
      </figure>
      {/* )} */}

      <div className="lg:w-[50%] lg:ml-10 mt-5 lg:mt-0">
        <h2 className="mb-3 text-[40px] lg:text-[60px] font-bold caveat text-[#4c453c]">
          "LOADING..."
        </h2>

        <p className="mb-3 text-[20px] lg:text-[25px] caveat">
          <span className="lilita font-thin text-[18px] lg:text-[20px]">
            Name :
          </span>{" "}
          <span className="text-[#4c453c]">"LOADING..." "LOADING..."</span>
        </p>

        <p className="mb-3 text-[20px] lg:text-[25px] caveat">
          <span className="lilita font-thin text-[18px] lg:text-[20px]">
            Email :
          </span>{" "}
          <span className="text-[#4c453c]"> "LOADING..."</span>
        </p>

        <p className="mb-3 text-[20px] lg:text-[25px] caveat">
          <span className="lilita font-thin text-[18px] lg:text-[20px]">
            Balance :
          </span>{" "}
          <span className="text-[#4c453c]">$ "LOADING..."</span>
        </p>

        <p className="mb-3 text-[20px] lg:text-[25px] caveat">
          <span className="lilita font-thin text-[18px] lg:text-[20px]">
            Mobile :
          </span>{" "}
          <span className="text-[#4c453c]">"LOADING..."</span>
        </p>

        <p className="mb-3 text-[20px] lg:text-[25px] caveat">
          <span className="lilita font-thin text-[18px] lg:text-[20px]">
            Address :
          </span>{" "}
          <span className="text-[#4c453c] roun">"LOADING..."</span>
        </p>
        <div className="lg:flex lg:justify-start md:flex md:justify-center flex justify-center">
          <button
            // onClick={() => handleProfile(filteredUserAccount?.id)}
            className="shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] text-[20px]"
          >
            Edit Profile
            <CgArrowLongRight className="text-[30px] group-hover:text-[#fef5e6] text-[#4c453c]" />
          </button>
          <button
            // onClick={() => handleProfile(filteredUserAccount?.id)}
            className="shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] text-[20px]"
          >
            Edit Profile
            <CgArrowLongRight className="text-[30px] group-hover:text-[#fef5e6] text-[#4c453c]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

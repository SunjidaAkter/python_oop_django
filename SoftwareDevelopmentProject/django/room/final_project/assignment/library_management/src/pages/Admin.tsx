import { AiOutlineUserAdd } from "react-icons/ai";
import {
  useGetUserAccountListQuery,
  useSingleUserQuery,
} from "../redux/features/api";
import { IAccount } from "../types/globalTypes";

const Admin = () => {
  const userID = localStorage.getItem("user_id");
  const {
    data: user,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useSingleUserQuery(userID);
  const {
    data: userAccountList,
    isLoading: isLoadingUser,
    error: errorUser,
  } = useGetUserAccountListQuery(undefined);
  const filteredUserAccount = userAccountList?.find(
    (SingleAccount: IAccount) => {
      return SingleAccount?.user === user?.username;
    }
  );
  const categoriseProfile = () => {
    if (isLoadingUser) {
      return (
        <div className="h-[500px] flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (errorUser) {
      return (
        <div className="my-[200px]">
          <p className="caveat text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else {
      return (
        <div className="card lg:card-side bg-white flex justify-between items-center rounded-lg lg:mx-10 mx-10 shadow-xl py-[50px] lg:px-[20px] px-0  sm:px-0 ">
          <div className="lg:flex lg:flex-row flex flex-col justify-between items-center  mx-auto w-[80%]">
            {filteredUserAccount?.image_url ? (
              <figure className="rounded-full">
                <img
                  src={filteredUserAccount?.image_url}
                  className="rounded-full lg:w-[80%] lg:h-[80%] w-[250px] h-[250px]"
                  alt="Album"
                />
                {/* <AiOutlineUserAdd className="px-7 text-[300px] text-[#4c453c] rounded-full border-[5px] border-[#837162]" /> */}
                {/* <img
            src="https://w7.pngwing.com/pngs/628/989/png-transparent-ux-ui-account-profile-user-avatar-ux-ui-simple-icon.png"
            alt="Album"
          /> */}
              </figure>
            ) : (
              <figure className="rounded-full">
                <AiOutlineUserAdd className="lg:w-[80%] lg:h-[80%] w-[250px] h-[250px] text-[#4c453c] rounded-full border-[5px] border-[#837162]" />
              </figure>
            )}
            <div className="lg:w-[50%] lg:ml-10 mt-5 lg:mt-0">
              <h2 className="mb-3 text-[40px] lg:text-[50px] font-bold caveat text-[#4c453c]">
                {user?.username || "LOADING..."}
              </h2>

              <p className="mb-3 text-[20px] lg:text-[25px] caveat">
                <span className="lilita font-thin text-[18px] lg:text-[20px]">
                  Name :
                </span>{" "}
                <span className="text-[#4c453c]">
                  {user?.first_name || "LOADING..."}{" "}
                  {user?.last_name || "LOADING..."}
                </span>
              </p>

              <p className="mb-3 text-[20px] lg:text-[25px] caveat">
                <span className="lilita font-thin text-[18px] lg:text-[20px]">
                  Email :
                </span>{" "}
                <span className="text-[#4c453c]">
                  {user?.email || "LOADING..."}
                </span>
              </p>

              <p className="mb-3 text-[20px] lg:text-[25px] caveat">
                <span className="lilita font-thin text-[18px] lg:text-[20px]">
                  Balance :
                </span>{" "}
                <span className="text-[#4c453c]">
                  ${filteredUserAccount?.amount || "LOADING..."}
                </span>
              </p>

              <p className="mb-3 text-[20px] lg:text-[25px] caveat">
                <span className="lilita font-thin text-[18px] lg:text-[20px]">
                  Mobile :
                </span>{" "}
                <span className="text-[#4c453c]">
                  {filteredUserAccount?.mobile_no || "LOADING..."}
                </span>
              </p>

              <p className="mb-3 text-[20px] lg:text-[25px] caveat">
                <span className="lilita font-thin text-[18px] lg:text-[20px]">
                  Address :
                </span>{" "}
                <span className="text-[#4c453c]">
                  {filteredUserAccount?.address || "LOADING..."}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div className="w-full">{categoriseProfile()}</div>;
};

export default Admin;

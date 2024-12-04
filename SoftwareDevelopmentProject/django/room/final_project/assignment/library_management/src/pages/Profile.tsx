import { AiOutlineUserAdd } from "react-icons/ai";
import {
  useGetBookListQuery,
  useGetBorrowQuery,
  useGetUserAccountListQuery,
  useSingleUserQuery,
  useUpdateBorrowMutation,
} from "../redux/features/api";
import { IAccount, IBook, IBorrow } from "../types/globalTypes";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import icon from "../assets/undraw_No_data_re_kwbl.png";
// import { CgArrowLongRight } from "react-icons/cg";

const Profile = () => {
  const [updateBorrow] = useUpdateBorrowMutation();
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
  // const navigate = useNavigate();
  // const handleProfile = (id: number) => {
  //   navigate(`/edit_profile/${id}`, { replace: true });
  // };
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
        <div className="card lg:card-side bg-white lg:flex lg:flex-row flex flex-col justify-between items-center rounded-lg lg:mx-10 mx-10 shadow-xl py-[50px] lg:px-[200px] px-0  sm:px-0">
          {filteredUserAccount?.image_url ? (
            <figure className="rounded-full lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]">
              <img
                src={filteredUserAccount?.image_url}
                className="rounded-full w-full h-full object-cover"
                alt="Profile"
              />
            </figure>
          ) : (
            <figure className="rounded-full">
              <AiOutlineUserAdd className="lg:h-[300px] lg:w-[300px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] text-[#4c453c] rounded-full border-[5px] border-[#837162]" />
            </figure>
          )}

          <div className="lg:w-[50%] lg:ml-10 mt-5 lg:mt-0">
            <h2 className="mb-3 text-[40px] lg:text-[60px] font-bold caveat text-[#4c453c]">
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
            {/* <div className="lg:flex lg:justify-start md:flex md:justify-center flex justify-center">
              <button
                onClick={() => handleProfile(filteredUserAccount?.id)}
                className="shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] text-[20px]"
              >
                Edit Profile
                <CgArrowLongRight className="text-[30px] group-hover:text-[#fef5e6] text-[#4c453c]" />
              </button>
            </div> */}
          </div>
        </div>
      );
    }
  };

  const { id } = useParams();

  const {
    data: borrowData,
    isLoading: borrowLoading,
    error: borrowError,
  } = useGetBorrowQuery(id);
  console.log(borrowData);
  const {
    data: bookList,
    // isLoading: userLoading,
    // error: userError,
  } = useGetBookListQuery(undefined);

  const handleReturn = (orderId: number) => {
    const updatedBorrow = {
      id: orderId,
      data: {
        borrow_status: "Returned",
      },
    };

    updateBorrow(updatedBorrow);

    Swal.fire({
      title: "Payment Successful!",
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "[#4c453c]",
    });
    console.log("object");
  };

  const categoriseTable = () => {
    if (borrowLoading) {
      return (
        <div className="h-[500px] flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (borrowError) {
      return (
        <div className="my-[200px]">
          <p className="caveat text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else if (!borrowLoading && borrowData?.length == 0) {
      return (
        <div className="mb-[100px] mt-[80px] flex flex-col justify-center items-center">
          <img className="w-64" src={icon} alt="" />
          <p className="text-[#4c453c] text-2xl caveat text-center font-extrabold">
            No Data Available!
          </p>
        </div>
      );
    } else {
      return (
        <table className="table-auto mx-auto w-full sm:w-[90%] lg:w-[70%] px-2 sm:px-5 rounded-lg mt-8 border dark:border-neutral-500">
          <thead className="bg-purple-900 text-white text-left">
            <tr className="bg-gradient-to-tr from-[[#4c453c]] to-[[#4c453c]] rounded-md py-1 sm:py-2 px-2 sm:px-4 text-white font-bold">
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Book Image
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Book Title
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Borrowing Date
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Borrow Price
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Remained Balance
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Status
              </th>
              <th className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Return Book
              </th>
            </tr>
          </thead>
          <tbody className="caveat text-xs sm:text-[16px] md:text-[20px]">
            {borrowData?.map((borrow: IBorrow) => {
              const book = bookList?.find(
                (men: IBook) => men.id === borrow.book
              );
              return (
                <tr
                  key={borrow?.id}
                  className="border-b dark:border-neutral-500 text-xs sm:text-sm md:text-base"
                >
                  <td className="px-2 sm:px-4 py-1 sm:py-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 sm:w-12 h-8 sm:h-12">
                        <img src={book?.image} alt={book?.title} />
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">{book?.title}</td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">
                    {borrow?.created_on}
                  </td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2 text-center">
                    $ {book?.price}
                  </td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2 text-center">
                    ${" "}
                    {borrow?.borrow_status === "Borrowed"
                      ? borrow?.balance_after_borrow
                      : borrow?.balance_after_return}
                  </td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">
                    {borrow?.borrow_status}
                  </td>
                  <td className="px-2 sm:px-4 py-1 sm:py-2">
                    <button
                      onClick={() => handleReturn(borrow?.id)}
                      className={`${
                        borrow?.borrow_status === "Returned"
                          ? "border-2 border-[#81807e] text-[#81807e] px-3 py-1 sm:py-2 font-bold rounded-xl mx-auto w-full"
                          : "border-2 border-[[#4c453c]] text-[[#4c453c]] px-3 py-1 sm:py-2 font-bold rounded-xl mx-auto w-full"
                      }`}
                      disabled={borrow?.borrow_status === "Returned"}
                    >
                      {borrow?.borrow_status === "Returned"
                        ? "Returned"
                        : "Return"}
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-[#4c453c]  text-white h-0">
              <td
                className="px-2 sm:px-4 py-1 sm:py-2 md:text-right text-left"
                colSpan={7}
              >
                Current Balance: ${filteredUserAccount?.amount}
              </td>
              {/* <td className="px-2 sm:px-4 py-1 sm:py-2 text-left"></td> */}
            </tr>
          </tbody>
        </table>
      );
    }
  };

  return (
    <div>
      {categoriseProfile()}
      <div className="m-10 py-3 px-4 bg-white rounded-xl shadow-md">
        <h1 className="font-bold caveat md:text-[50px] text-[30px] text-center pb-2 pt-2 text-[#4c453c]">
          Borrowing History
        </h1>
        <hr />
        <div className="overflow-x-auto">{categoriseTable()}</div>
        <p className="my-2 caveat text-center md:hidden block text-[0px] sm:text-[16px] md:text-[20px]">
          Current Balance: ${filteredUserAccount?.amount}
        </p>
      </div>
    </div>
  );
};

export default Profile;

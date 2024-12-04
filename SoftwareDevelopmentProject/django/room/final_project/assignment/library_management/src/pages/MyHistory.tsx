// import { useParams } from "react-router-dom";
import {
  useGetBookListQuery,
  useGetBorrowQuery,
  useGetUserAccountListQuery,
  useSingleUserQuery,
  useUpdateBorrowMutation,
} from "../redux/features/api";
import Swal from "sweetalert2";
import { IAccount, IBook, IBorrow } from "../types/globalTypes";
import icon from "../assets/undraw_No_data_re_kwbl.png";

const MyHistory = () => {
  const [updateBorrow] = useUpdateBorrowMutation();
  //   const { id } = useParams();
  const userID = localStorage.getItem("user_id");
  const { data: user } = useSingleUserQuery(userID);
  const { data: userAccountList } = useGetUserAccountListQuery(undefined);
  const filteredUserAccount = userAccountList?.find(
    (SingleAccount: IAccount) => {
      return SingleAccount?.user === user?.username;
    }
  );

  const {
    data: borrowData,
    isLoading: borrowLoading,
    error: borrowError,
  } = useGetBorrowQuery(filteredUserAccount?.id);
  console.log(borrowData);
  const { data: bookList } = useGetBookListQuery(undefined);

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
  console.log(borrowError);
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
        <table className="table-auto mx-auto w-[70%] px-5 rounded-lg mt-8 border dark:border-neutral-500">
          <thead className="bg-purple-900 text-white text-left">
            <tr className="bg-gradient-to-tr from-[[#4c453c]] to-[[#4c453c]] rounded-md py-2 px-4 text-white font-bold">
              <th className="px-4 py-2">Book Image</th>
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">Borrowing Date</th>
              <th className="px-4 py-2">Borrow Price</th>
              <th className="px-4 py-2">Remained Balance</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Return Book</th>
            </tr>
          </thead>
          <tbody className="caveat text-[20px]">
            {borrowData?.map((borrow: IBorrow) => {
              const book = bookList?.find(
                (men: IBook) => men.id === borrow.book
              );
              return (
                <tr
                  key={borrow?.id}
                  className="border-b dark:border-neutral-500"
                >
                  <td className="px-4 py-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={book?.image} alt={book?.title} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">{book?.title}</td>
                  <td className="px-4 py-2">{borrow?.created_on}</td>
                  <td className="px-4 py-2 text-center">$ {book?.price}</td>
                  <td className="px-4 py-2 text-center">
                    ${" "}
                    {borrow?.borrow_status === "Borrowed"
                      ? borrow?.balance_after_borrow
                      : borrow?.balance_after_return}
                  </td>
                  <td className="px-4 py-2">{borrow?.borrow_status}</td>
                  <td className="px-4 py-2 ">
                    <button
                      onClick={() => handleReturn(borrow?.id)}
                      className={`${
                        borrow?.borrow_status === "Returned"
                          ? "border-2 border-[#81807e] text-[#81807e] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
                          : "border-2 border-[[#4c453c]] text-[[#4c453c]] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
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

            <tr className=" bg-[#4c453c] text-white">
              <th className="px-4 py-2 text-right" colSpan={6}>
                Current Balance
              </th>
              <th className="px-4 py-2 text-left">
                ${filteredUserAccount?.amount}
              </th>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="mx-10 py-3 px-4 bg-white rounded-xl shadow-md">
        <h1 className="font-bold caveat lg:text-[50px] text-[30px] text-center pb-2 pt-2 text-[#4c453c]">
          My History
        </h1>
        <hr />
        <div className="overflow-x-auto">{categoriseTable()}</div>
      </div>
    </div>
  );
};

export default MyHistory;

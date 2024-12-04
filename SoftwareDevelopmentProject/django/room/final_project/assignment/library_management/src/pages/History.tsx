import Swal from "sweetalert2";
import {
  useDeleteBorrowMutation,
  useGetBookListQuery,
  useGetBorrowListQuery,
  useGetUserAccountListQuery,
  // useSingleUserQuery,
} from "../redux/features/api";
import { IAccount, IBook, IBorrow } from "../types/globalTypes";
import icon from "../assets/undraw_No_data_re_kwbl.png";

const History = () => {
  const [deleteBorrow] = useDeleteBorrowMutation();
  // const userId = localStorage.getItem("user_id"); // Check if user is logged in
  // const { data: singleUser } = useSingleUserQuery(userId);
  const { data: userAccountsData } = useGetUserAccountListQuery(undefined);
  // const filteredUserAccount = userAccountsData?.find(
  //   (SingleUserAccount: IAccount) => {
  //     return SingleUserAccount?.user === singleUser?.username;
  //   }
  // );
  const handleDelete = (orderId: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#615b51",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBorrow(orderId);
        // navigate("/all-books");
        Swal.fire({
          title: "History Deleted Successfully!",
          icon: "success",
          confirmButtonText: "Cool!",
          confirmButtonColor: "#615b51",
        });
      }
    });
  };
  const {
    data: bookList,
    // isLoading: userLoading,
    // error: userError,
  } = useGetBookListQuery(undefined);
  console.log(bookList);

  const {
    data: borrowData,
    isLoading: borrowLoading,
    error: borrowError,
  } = useGetBorrowListQuery(undefined);
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
        <table className="table-auto mx-auto w-[90%] px-5 rounded-lg mt-8 border dark:border-neutral-500">
          <thead className="bg-purple-900 text-white text-left">
            <tr className="bg-gradient-to-tr from-[[#4c453c]] to-[[#4c453c]] rounded-md py-2 px-4 text-white font-bold">
              <th className="px-4 py-2">Book Image</th>
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">Borrowing Date</th>
              <th className="px-4 py-2">Borrow Price</th>
              <th className="px-4 py-2">Reader Name</th>
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
                    {userAccountsData?.find((acnt: IAccount) => {
                      return borrow?.borrower === acnt?.id;
                    })?.user || "Loading..."}
                  </td>
                  <td className="px-4 py-2">{borrow?.borrow_status}</td>
                  <td className="px-4 py-2 ">
                    <button
                      onClick={() => handleDelete(borrow?.id)}
                      className="border-2 border-[#722020] text-[#722020] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
                      //   disabled={borrow?.borrow_status === "Returned"}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* <tr className=" bg-[#4c453c] text-white">
              <th className="px-4 py-2 text-right" colSpan={6}>
                Current Balance
              </th>
              <th className="px-4 py-2 text-left">
                ${filteredUserAccount?.amount}
              </th>
            </tr> */}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="mx-10 py-3 px-4 bg-white rounded-xl shadow-md">
        <h1 className="font-bold caveat lg:text-[50px] text-[30px] text-center pb-2 pt-2 text-[#4c453c]">
          Borrowing History
        </h1>
        <hr />
        <div className="overflow-x-auto">{categoriseTable()}</div>
      </div>
    </div>
  );
};

export default History;

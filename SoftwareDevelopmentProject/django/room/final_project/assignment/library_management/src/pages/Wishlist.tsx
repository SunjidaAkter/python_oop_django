import Swal from "sweetalert2";
import {
  useDeleteWishlistMutation,
  useGetBookListQuery,
  useGetUserAccountListQuery,
  useGetWishlistQuery,
  useSingleUserQuery,
} from "../redux/features/api";
import icon from "../assets/undraw_No_data_re_kwbl.png";
import icon1 from "../assets/undraw_secure_login_pdn4.png";
import { IAccount, IBook, IBorrow } from "../types/globalTypes";

const Wishlist = () => {
  const {
    data: bookList,
    // isLoading: userLoading,
    // error: userError,
  } = useGetBookListQuery(undefined);
  console.log(bookList);

  const userId = localStorage.getItem("user_id"); // Check if user is logged in

  const {
    data: user,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useSingleUserQuery(userId);
  const {
    data: accountList,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useGetUserAccountListQuery(undefined);
  console.log(userId);
  const filteredAccount = accountList?.find((SingleUser: IAccount) => {
    return SingleUser?.user === user?.username;
  });
  console.log(filteredAccount);
  const id = filteredAccount?.id;
  const {
    data: wishlistData,
    isLoading: wishlistLoading,
    error: wishlistError,
  } = useGetWishlistQuery(id);
  const [deleteWishlist] = useDeleteWishlistMutation();
  const handleDelete = (cartId: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "[#4c453c]",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed the deletion
        // const options = {
        //   id: id,
        // };
        deleteWishlist(cartId);
        // navigate("/all-books");
        Swal.fire({
          title: "Wishlist Item Deleted Successfully!",
          icon: "success",
          confirmButtonText: "Ok!",
          confirmButtonColor: "[#4c453c]",
        });
      }
    });
  };

  const categoriseTable = () => {
    if (wishlistLoading) {
      return (
        <div className="h-[500px] flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (wishlistError) {
      return (
        <div className="my-[200px]">
          <p className="caveat text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else if (!wishlistLoading && wishlistData?.length == 0) {
      return (
        <div className="mb-[100px] mt-[80px] flex flex-col justify-center items-center">
          <img className="w-64" src={icon} alt="" />
          <p className="text-[#4c453c] text-2xl caveat text-center font-extrabold">
            No Data Available!
          </p>
        </div>
      );
    } else if (!userId) {
      return (
        <div className="mb-[100px] mt-[80px] flex flex-col justify-center items-center">
          <img className="w-64" src={icon1} alt="" />
          <p className="text-[#4c453c] text-2xl caveat text-center font-extrabold">
            No User Available!
          </p>
        </div>
      );
    } else {
      return (
        <table className="table-auto mx-auto w-[70%] px-5 rounded-lg mt-8 mb-5 border dark:border-neutral-500">
          <thead className="bg-purple-900 text-white text-left">
            <tr className="bg-gradient-to-tr from-[[#4c453c]] to-[[#4c453c]] rounded-md py-2 px-4 text-white font-bold">
              <th className="px-4 py-2">Book Image</th>
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">Adding Date</th>
              <th className="px-4 py-2">Borrow Price</th>
              <th className="px-4 py-2">Delete From Wishlilst</th>
            </tr>
          </thead>
          <tbody className="caveat text-[20px]">
            {wishlistData?.map((borrow: IBorrow) => {
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
                  <td className="px-4 py-2 ">
                    <button
                      onClick={() => handleDelete(borrow?.id)}
                      className="border-2 border-[#862a32] text-[#862a32] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
                      disabled={borrow?.borrow_status === "Returned"}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="m-10 py-3 px-4 bg-white rounded-xl shadow-md">
      <h1 className="font-bold caveat text-[50px] text-center pb-5 pt-2 text-[#4c453c]">
        Wishlist
      </h1>
      <hr />
      <div className="overflow-x-auto">{categoriseTable()}</div>
    </div>
  );
};

export default Wishlist;

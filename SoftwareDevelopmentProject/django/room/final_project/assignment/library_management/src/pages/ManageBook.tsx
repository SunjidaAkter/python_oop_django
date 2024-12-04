import Swal from "sweetalert2";
import {
  useDeleteBookMutation,
  useGetAuthorListQuery,
  useGetBookListQuery,
  useGetGenreQuery,
} from "../redux/features/api";
import { useNavigate } from "react-router-dom";
import { IAuthor, IBook, IGenre } from "../types/globalTypes";
import StarRatings from "react-star-ratings";
import icon from "../assets/undraw_No_data_re_kwbl.png";

const ManageBook = () => {
  const [deleteBook] = useDeleteBookMutation();
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
        deleteBook(orderId);
        // navigate("/all-books");
        Swal.fire({
          title: "Book Deleted Successfully!",
          icon: "success",
          confirmButtonText: "Ok!",
          confirmButtonColor: "#615b51",
        });
      }
    });
  };
  const {
    data: bookList,
    isLoading: bookLoading,
    error: bookError,
  } = useGetBookListQuery(undefined);
  const {
    data: authorList,
    // isLoading: authorLoading,
    // error: authorError,
  } = useGetAuthorListQuery(undefined);
  const {
    data: genreList,
    // isLoading: authorLoading,
    // error: authorError,
  } = useGetGenreQuery(undefined);
  console.log(bookList, authorList);

  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`/dashboard/edit_book/${id}`, { replace: true });
  };
  const handleDetail = (id: number) => {
    navigate(`/details/${id}`, { replace: true });
  };

  const categoriseTable = () => {
    if (bookLoading) {
      return (
        <div className="h-[500px] flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (bookError) {
      return (
        <div className="my-[200px]">
          <p className="caveat text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else if (!bookLoading && bookList?.length == 0) {
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
        <table className="table-auto mx-auto w-[90%] px-5 rounded-lg mb-10 mt-8 border dark:border-neutral-500">
          <thead className="bg-purple-900 text-white text-left">
            <tr className="bg-gradient-to-tr from-[[#4c453c]] to-[[#4c453c]] rounded-md py-2 px-4 text-white font-bold">
              <th className="px-4 py-2">Book</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Borrow Price</th>
              <th className="px-4 py-2">Detail</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody className="caveat text-[20px]">
            {bookList?.map((book: IBook) => {
              const author = authorList?.find((auth: IAuthor) => {
                return auth?.id === book?.author;
              });
              const genreName = genreList?.find((genre: IGenre) => {
                return genre?.id === book?.genre;
              })?.name;
              return (
                <tr key={book?.id} className="border-b dark:border-neutral-500">
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={book?.image} alt={book?.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{book?.title}</div>
                        <div className="text-sm opacity-50">{genreName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <StarRatings
                      rating={book?.rating}
                      starRatedColor="#f3b763"
                      starDimension="15px"
                      starEmptyColor="#a9a9a9"
                      starSpacing="1px"
                      numberOfStars={5}
                      name="rating"
                    />
                    {/* <br /> */}
                    <p className="">
                      {book?.reviews_count} Review
                      {book?.reviews_count !== 1 && book?.reviews_count !== 0
                        ? "s"
                        : ""}
                    </p>
                  </td>
                  <td className="px-4 py-2">{author?.name}</td>
                  <td className="px-4 py-2 text-center">$ {book?.price}</td>

                  <td className="px-4 py-2 ">
                    <button
                      onClick={() => handleDetail(book?.id)}
                      className="border-2 border-[[#4c453c]] text-[[#4c453c]] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
                      //   disabled={borrow?.borrow_status === "Returned"}
                    >
                      Detail
                    </button>
                  </td>
                  <td className="px-4 py-2 ">
                    <button
                      onClick={() => handleEdit(book?.id)}
                      className="border-2 border-[[#4c453c]] text-[[#4c453c]] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
                      //   disabled={borrow?.borrow_status === "Returned"}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-4 py-2 ">
                    <button
                      onClick={() => handleDelete(book?.id)}
                      className="border-2 border-[#722020] text-[#722020] px-3 py-2 font-bold rounded-xl mx-auto w-[100%]"
                      //   disabled={borrow?.borrow_status === "Returned"}
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
    <div className="w-full ">
      <div className="mx-10 px-4 bg-white rounded-xl shadow-md">
        <h1 className="font-bold caveat lg:text-[50px] text-[30px] text-center pb-2 pt-2 text-[#4c453c]">
          Book Management
        </h1>
        <hr />
        <div className="overflow-x-auto">{categoriseTable()}</div>
      </div>
    </div>
  );
};

export default ManageBook;

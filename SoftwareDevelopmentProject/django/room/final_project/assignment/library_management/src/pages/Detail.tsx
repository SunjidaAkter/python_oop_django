import { IoHeartOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import icon from "../assets/undraw_No_data_re_kwbl.png";
import StarRatings from "react-star-ratings";
import StarRating from "./StarRating";
import Swal from "sweetalert2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAuthorListQuery,
  useGetBorrowQuery,
  useGetGenreQuery,
  useGetReviewsQuery,
  useGetUserAccountListQuery,
  useGetUserListQuery,
  useGetWishlistQuery,
  usePostBorrowMutation,
  usePostReviewMutation,
  usePostWishlistMutation,
  useSingleBookQuery,
  useSingleUserQuery,
} from "../redux/features/api";
import {
  IAccount,
  IAuthor,
  IBorrow,
  IGenre,
  IReview,
  IUser,
} from "../types/globalTypes";

const Detail = () => {
  //******************************************* posting review ********************************************** */
  const [postBorrow, { error }] = usePostBorrowMutation();
  const [postWishlist] = usePostWishlistMutation();
  const [postReview, { isError, isSuccess, isLoading: postReviewLoading }] =
    usePostReviewMutation();
  console.log(isSuccess, isError, postReviewLoading);
  const { id } = useParams();
  const userID = localStorage.getItem("user_id");
  const {
    data: user,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useSingleUserQuery(userID);
  const {
    data: userAccountList,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useGetUserAccountListQuery(undefined);
  const filteredUserAccount = userAccountList?.find(
    (SingleAccount: IAccount) => {
      return SingleAccount?.user === user?.username;
    }
  );
  const { data: borrow } = useGetBorrowQuery(filteredUserAccount?.id);
  // const { data: menu } = useSingleBookQuery(id);
  const {
    data: book,
    isLoading: isLoadingBook,
    error: errorBook,
  } = useSingleBookQuery(id);
  const filteredBorrow = borrow?.find((ord: IBorrow) => {
    return ord?.book === book?.id;
  });
  const borrowedBorrow = borrow?.find((ord: IBorrow) => {
    return ord?.book === book?.id && ord?.borrow_status === "Borrowed";
  });
  // console.log(menu);
  const getValue = (id: string): string => {
    const element = document.getElementById(id) as HTMLInputElement | null;
    return element ? element.value : "";
  };
  const handleReview = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const title = getValue("review_title");
    const body = getValue("review_body");

    if (!id || !title || !body) {
      console.error("Missing ID, title, or body.");
      return;
    }
    console.log(filteredBorrow);
    if (!filteredBorrow || filteredBorrow?.borrow_status === "Borrowed") {
      Swal.fire({
        title: "Rading is required!",
        text: "After Reading And Returning The Book You Can Give Review!",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#686464",
      });
      return;
    }
    if (!userID) {
      Swal.fire({
        title: "Unauthenticated!",
        text: "You have to login to continue!",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#686464",
      });
      return;
    }
    const _id = parseInt(localStorage.getItem("user_id")!);
    const options = {
      id: id,
      data: {
        title,
        body,
        reviewer: _id,
        book: parseInt(id),
        rating: currentValue,
      },
    };
    if (!postReviewLoading && _id) {
      postReview(options);
      // Clear form inputs
      (document.getElementById("review_title") as HTMLInputElement).value = "";
      (document.getElementById("review_body") as HTMLInputElement).value = "";

      Swal.fire({
        title: "Review Added Successfully!",
        icon: "success",
        confirmButtonText: "OK!",
        confirmButtonColor: "#686464",
      });
    } else if (!postReviewLoading && !_id) {
      Swal.fire({
        title: "You are not registered!",
        icon: "error",
        confirmButtonText: "OK!",
        confirmButtonColor: "#686464",
      });
    }
  };
  console.log(filteredBorrow?.borrow_status, "Please");

  //* ********************************************** detail ***************************************************** *//

  const [currentValue, setCurrentValue] = useState(1);

  const { data: authorData } = useGetAuthorListQuery(undefined);
  const { data: genreData } = useGetGenreQuery(undefined);

  const handleBorrow = async () => {
    if (userID && book) {
      const options = {
        borrower: parseInt(filteredUserAccount?.id),
        book: book?.id,
        order_status: "Borrowed",
      };

      postBorrow(options);
      console.log(error, "Error");

      Swal.fire({
        icon: "success",
        title: "Borrowed successfully!",
        text: "You have been borrowed successfully.",
        confirmButtonText: "OK",
        confirmButtonColor: "#686464",
      });
    } else if (!userID) {
      Swal.fire({
        icon: "error",
        title: "Borrowing Failed!",
        text: "You are not logged in. Please try again.",
        confirmButtonText: "OK",
        confirmButtonColor: "#686464",
      });
    }
  };

  const userToken = localStorage.getItem("token");
  const handleWishlist = async () => {
    if (userToken && userID && book) {
      const options = {
        borrower: filteredUserAccount?.id,
        book: book?.id,
      };
      console.log(options, book?.id);

      postWishlist(options);

      Swal.fire({
        icon: "success",
        title: "Wishlist Placed!",
        text: "Your order has been successfully placed.",
        confirmButtonColor: "#615b51",
      });
    } else if (!userID && !userToken) {
      Swal.fire({
        icon: "error",
        title: "Wishlist Failed!",
        text: "You are not logged in. Please try again.",
        confirmButtonColor: "#615b5161",
      });
    }
  };
  const { data: wishlist } = useGetWishlistQuery(filteredUserAccount?.id); // Fetch existing orders
  const existingWishlist = wishlist?.find(
    (crt: IBorrow) =>
      crt.borrower === filteredUserAccount?.id && crt?.book === book?.id
  );
  const categoriseBook = () => {
    if (isLoadingBook) {
      return (
        <div className="h-[500px] flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (errorBook) {
      return (
        <div className="my-[200px]">
          <p className="caveat text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else {
      const genreName = genreData?.find((genre: IGenre) => {
        return genre?.id === book?.genre;
      })?.name;
      const authorName = authorData?.find((author: IAuthor) => {
        return author?.id === book?.author;
      })?.name;
      return (
        <div className="card lg:card-side bg-white lg:flex lg:flex-row md:flex md:flex-col flex flex-col justify-between items-center rounded-lg mx-10 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] py-[20px] lg:px-[150px] md:px-10 px-5">
          <figure className="w-full lg:w-1/2">
            <img
              className="lg:w-1/2 w-full rounded-lg"
              src={book?.image}
              alt={book?.title}
            />
          </figure>
          <div className="lg:w-1/2 w-full flex justify-start">
            <div className="w-[80%]">
              <p
                className="lg:text-[70px] text-[30px] lilita font-thin text-[#4c453c]"
                style={{ lineHeight: "70px" }}
              >
                {book?.title}
              </p>
              <p
                style={{ lineHeight: "50px" }}
                className="footer-title text-[25px]  text-[#4c453c] caveat mb-5"
              >
                {authorName} <span className="text-[25px]">({genreName})</span>
              </p>
              <div
                // style={{ lineHeight: "10px" }}
                className="flex mt-[-25px] mb-3 justify-between items-center"
              >
                <StarRatings
                  rating={book?.rating}
                  starRatedColor="#f3b763"
                  starDimension="30px"
                  starEmptyColor="#a9a9a9"
                  starSpacing="2px"
                  numberOfStars={5}
                  name="rating"
                />
              </div>
              {/* <p className="badge bg-[#4c453c] text-white text-sm py-5">Novel</p> */}
              <p className="text-xl caveat">
                {book?.reviews_count} Review
                {book?.reviews_count !== 1 && book?.reviews_count !== 0
                  ? "s"
                  : ""}
              </p>
              <p className="mb-3 lg:text-lg text-sm text-[[#4c453c]]">
                <b>Borrow Price :</b>{" "}
                <span className="font-medium caveat lg:text-5xl text-xl">
                  ${book?.price}
                </span>
              </p>
              <p className="mb-3 lg:text-lg text-sm">
                <b>
                  <span className="font-normal">{book?.description}</span>
                </b>
              </p>
              <button
                onClick={handleBorrow}
                className={`${
                  borrowedBorrow
                    ? "shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] md:btn md:btn-md btn btn-sm border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#a8a39e] lg:text-[20px] text-[15px]"
                    : "shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] md:btn md:btn-md btn btn-sm border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] lg:text-[20px] text-[15px]"
                }
                  `}
                disabled={borrowedBorrow}
              >
                {borrowedBorrow ? "Borrowed" : "Borrow"}
              </button>
              <button
                className={`${
                  borrowedBorrow
                    ? "lg:ml-8 ml-2 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] md:btn md:btn-md btn btn-sm border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#a8a39e] lg:text-[20px] text-[15px]"
                    : "lg:ml-8 ml-2 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] md:btn md:btn-md btn btn-sm border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] lg:text-[20px] text-[15px]"
                }
                `}
                onClick={handleWishlist}
                // className="ml-8 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] text-[20px]"
                disabled={existingWishlist}
              >
                {existingWishlist ? "Added to Wishlist" : "Add to Wishlist"}
                <IoHeartOutline />
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  //* ********************************************** reviews ***************************************************** *//

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };
  const { data: users } = useGetUserListQuery(undefined);
  // const { data: accounts } = useGetUserAccountsListQuery(undefined);
  const {
    data: reviewData,
    isLoading: reviewLoading,
    error: reviewError,
  } = useGetReviewsQuery(id);
  console.log(id);
  const categoriseReview = () => {
    if (reviewLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (reviewError) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 caveat text-2xl text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else if (!reviewLoading && reviewData?.length === 0) {
      return (
        <div className="mb-[100px] mt-[80px] flex flex-col justify-center items-center">
          <img className="w-64" src={icon} alt="" />
          <p className="text-[#4c453c] text-2xl caveat text-center font-extrabold">
            No Reviews Available!
          </p>
        </div>
      );
    } else {
      return (
        <>
          {reviewData?.map((review: IReview) => {
            const use = users?.find((user: IUser) => {
              return user?.id === review?.reviewer;
            });

            const account = userAccountList?.find((user: IAccount) => {
              return use?.username === user?.user;
            });
            console.log(filteredUserAccount);
            return (
              <div className="py-6 md:px-12 lg:px-12 px-5 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] bg-[white] rounded-lg mx-auto w-[85%] my-5">
                <div className="lg:flex lg:flex-row flex flex-col justify-center ">
                  <img
                    className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full border-[2px] border-[#837162]"
                    src={
                      filteredUserAccount
                        ? filteredUserAccount?.image_url
                        : "https://png.pngtree.com/png-clipart/20220904/ourmid/pngtree-muslim-girl-using-hijab-png-image_6137399.png"
                    }
                    alt=""
                  />
                  <div className="lg:w-[70%] w-full lg:ml-10 ml-3 mt-5">
                    <div className="lg:flex lg:flex-row flex flex-col justify-between">
                      <p className="text-[#4c453c] text-[25px] caveat font-bold">
                        {account ? account?.user : "Loading..."}
                      </p>
                      <p className=" text-[#4c453c] lg:text-[25px] text-[15px] caveat font-thin footer-title">
                        {formatDate(review?.created)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <StarRatings
                        rating={review?.rating}
                        starRatedColor="#f3b763"
                        starDimension="25px"
                        starEmptyColor="#a9a9a9"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                    <p className=" text-[#4c453c] text-[35px] caveat font-medium">
                      {review?.title}
                    </p>
                    <p className=" text-[#4c453c] text-xl caveat font-thin">
                      {review?.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <div>
      {categoriseBook()}
      <div className="">
        <div className="bg-white m-10 rounded-lg">
          <div className="card-body pb-0 pt-9">
            <p className="lg:text-[46px] text-[25px] font-bold text-[#4c453c] text-center caveat">
              Give Your Review And Ratings
            </p>
            <form
              onSubmit={handleReview}
              className="shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)]  mx-auto w-full lg:px-40 px-5 pt-5 pb-10 md:w-[75%] lg:w-[70%] bg-[white] mb-10 mt-5 bg-opacity-95 rounded-lg"
            >
              <p className="text-[26px] font-medium text-[#4c453c] mb-5 text-center caveat">
                Give Ratings
              </p>
              <StarRating
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
              />
              <input
                type="text"
                placeholder="Title"
                id="review_title"
                className="input input-bordered border-dashed border-[2px] border-[#715257] rounded-lg w-full block bg-[white] my-7"
              />
              <textarea
                placeholder="Description"
                id="review_body"
                className="textarea textarea-bordered h-20 border-dashed border-[2px] border-[#715257] rounded-lg w-full block bg-[white]"
              />
              <div className="flex justify-center">
                <button className="shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold px-20 mt-10 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] text-[20px]">
                  Review
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="m-10 bg-white p-3 rounded-lg">
          <h5 className="lg:text-[46px] text-[25px] font-bold text-[#4c453c] mb-5 text-center mt-5 caveat">
            Total Reviews : {reviewData?.length}
          </h5>
          <div className="card my-2">{categoriseReview()}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

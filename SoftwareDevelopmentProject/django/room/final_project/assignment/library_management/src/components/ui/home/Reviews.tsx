// import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
// import StarRatings from "react-star-ratings";
// import "../../../App.css";
// import {
//   useGetAuthorListQuery,
//   useGetBookListQuery,
//   useGetReviewListQuery,
//   //   useGetGenreQuery,
// } from "../../../redux/features/api";
// import { ArrowProps, IAuthor, IBook } from "../../../types/globalTypes";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ReactNode, useState } from "react";
// import { Link } from "react-router-dom";
// import "../../../App.css";
// import icon from "../../../assets/undraw_No_data_re_kwbl.png";

// const Reviews = () => {
//   const {
//     data: reviewsData,
//     isLoading: reviewsLoading,
//     error: reviewsError,
//   } = useGetReviewListQuery(undefined);
//   const { data: authorData } = useGetAuthorListQuery(undefined);

//   const SamplePrevArrow = (props: ArrowProps) => {
//     const { className, style, onClick } = props;
//     const [arrowStyle] = useState<React.CSSProperties>({
//       width: "50px",
//       top: "-10%",
//       left: "5%",
//     });

//     return (
//       <div
//         style={{
//           ...style,
//           ...arrowStyle,
//           borderRadius: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "30px",
//         }}
//         onClick={onClick}
//         className={`arrows ${className} `}
//       >
//         <CgArrowLongLeft style={{ width: "50px", color: "#837162" }} />
//       </div>
//     );
//   };

//   const SampleNextArrow = (props: ArrowProps) => {
//     const { className, style, onClick } = props;
//     const [arrowStyle] = useState<React.CSSProperties>({
//       width: "50px",
//       top: "-10%",
//       right: "5%",
//     });

//     return (
//       <div
//         style={{
//           ...style,
//           ...arrowStyle,
//           borderRadius: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "30px",
//         }}
//         onClick={onClick}
//         className={`arrows ${className} `}
//       >
//         <CgArrowLongRight style={{ color: "#837162" }} />
//       </div>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: false,
//     slidesToShow: 4, // Default slidesToShow for large screens
//     slidesToScroll: 1,
//     autoplay: false,
//     speed: 1000,
//     autoplaySpeed: 1000,
//     cssEase: "linear",
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: false,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           infinite: false,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           infinite: false,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     appendDots: (dots: ReactNode) => (
//       <div
//         style={{
//           padding: "10px",
//         }}
//       >
//         <ul
//           style={{
//             margin: "0px",
//             display: "flex",
//             justifyContent: "center",
//             color: "red",
//           }}
//         >
//           {dots}
//         </ul>
//       </div>
//     ),
//   };

//   const categoriseBook = () => {
//     if (reviewsLoading) {
//       return (
//         <div className="h-[500px] flex justify-center items-center">
//           <span className="loading loading-ring loading-lg"></span>
//         </div>
//       );
//     } else if (reviewsError) {
//       return (
//         <div className="my-[200px]">
//           <p className="caveat text-red-500 text-lg text-center font-extrabold">
//             Something Went Wrong!!
//           </p>
//         </div>
//       );
//     } else if (!reviewsLoading && reviewsData?.length == 0) {
//       return (
//         <div className="mb-[100px] mt-[80px] flex flex-col justify-center items-center">
//           <img className="w-64" src={icon} alt="" />
//           <p className="text-[#4c453c] text-2xl caveat text-center font-extrabold">
//             No Data Available!
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div className="flex justify-between items-center flex-wrap w-full">
//           <Slider {...settings} className="relative w-full">
//             {filteredBook?.map((book: IBook) => {
//               const authorName = authorData?.find((author: IAuthor) => {
//                 return author?.id === book?.author;
//               })?.name;
//               return (
//                 <Link key={book?.id} to={`/details/${book?.id}`}>
//                   <div className="w-[90%] mx-auto md:mt-5 mt-5 mb-5 bg-white px-1 pt-12  relative shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] flex flex-col rounded-lg justify-between ">
//                     <div className="flex justify-center">
//                       <img
//                         className="w-[204px] h-[261px] object-cover rounded-lg"
//                         src={book?.image}
//                         alt={book?.title}
//                       />
//                     </div>
//                     <div className="py-4 px-6">
//                       <div className="flex my-3 justify-between items-center">
//                         <StarRatings
//                           rating={book?.rating}
//                           starRatedColor="#f3b763"
//                           starDimension="25px"
//                           starEmptyColor="#a9a9a9"
//                           starSpacing="2px"
//                           numberOfStars={5}
//                           name="rating"
//                         />
//                       </div>
//                       <div className="flex justify-between items-center ">
//                         <p className="uppercase text-[28px] caveat  text-[#4c453c]">
//                           {book?.title}
//                         </p>
//                         <div className="absolute top-0 right-2  text-[#4c453c] text-[45px] caveat ">
//                           ${book?.price}
//                         </div>
//                         <div className="badge bg-[#4c453c] text-white text-xs">
//                           genreName?.name
//                         </div>
//                       </div>
//                       <p className="footer-title text-[20px]  text-[#4c453c] caveat mb-5">
//                         {authorName}
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <p className="text-[#4c453c] caveat">
//                           {book?.reviews_count} Review
//                           {book?.reviews_count !== 1 &&
//                           book?.reviews_count !== 0
//                             ? "s"
//                             : ""}
//                         </p>

//                         <div className="flex justify-end items-center">
//                           <a
//                             href="{% url 'book_detail' book.id %}"
//                             className=" text-[#4c453c] text-[25px] caveat font-normal mr-2"
//                           >
//                             Details
//                           </a>
//                           <CgArrowLongRight className="text-[30px]  text-[#4c453c]" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </Slider>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="flex justify-between lg:mx-5 lg:my-10 mx-10 my-5 ">
//       <div className="lg:w-[100%] md:w-full w-full flex flex-col justify-center items-center">
//         <div className="w-[98%] bg-white p-4 mb-5 rounded-lg shadow-lg">
//           <label className="input input-bordered flex items-center gap-2 w-1/2 border-dashed bg-white border-[#615b51] border-[2px] mx-auto rounded-xl">
//             <input
//               type="text"
//               className="grow"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </label>
//         </div>
//         {categoriseBook()}
//       </div>
//     </div>
//   );
// };

// export default Reviews;

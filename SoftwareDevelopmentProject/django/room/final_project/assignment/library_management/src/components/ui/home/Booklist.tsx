import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import StarRatings from "react-star-ratings";
import "../../../App.css";
import {
  useGetAuthorListQuery,
  useGetBookListQuery,
  useGetGenreQuery,
} from "../../../redux/features/api";
import { ArrowProps, IAuthor, IBook, IGenre } from "../../../types/globalTypes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import icon from "../../../assets/undraw_No_data_re_kwbl.png";

const Booklist = () => {
  //***************************************** genre related properties **************************************
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
  };
  const {
    data: genreData,
    isLoading: genreLoading,
    error: genreError,
  } = useGetGenreQuery(undefined);
  const categoriseGenre = () => {
    if (genreLoading) {
      return (
        <div className=" flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (genreError) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 caveat text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else if (!genreLoading && genreData?.length == 0) {
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
        <ul className="space-y-2">
          <div className="bg-stone-800 h-[0.5px]"></div>
          <li>
            <p
              onClick={() => handleCategoryClick(0)}
              className={`text-center my-3 caveat text-[25px] text-[#4c453c] hover:underline ${
                selectedCategory === 0 ? "underline font-extrabold" : ""
              }`}
            >
              All
            </p>
          </li>

          {genreData?.map((genre: IGenre) => (
            <div key={genre?.id} className="">
              <div className="bg-stone-800 h-[0.5px]"></div>
              <li>
                <p
                  onClick={() => handleCategoryClick(genre?.id)}
                  className={`text-center my-3 caveat text-[25px] text-[#4c453c] hover:underline ${
                    selectedCategory === genre?.id
                      ? "underline font-extrabold"
                      : ""
                  }`}
                >
                  {genre?.name}
                </p>
              </li>
            </div>
          ))}
        </ul>
      );
    }
  };
  //***************************************** book related properties **************************************
  const {
    data: bookData,
    isLoading: bookLoading,
    error: bookError,
  } = useGetBookListQuery(undefined);
  const { data: authorData } = useGetAuthorListQuery(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
  const filteredBook = bookData?.filter((book: IBook) => {
    const matchesCategory =
      selectedCategory === 0 || book.genre === selectedCategory;
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const SamplePrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    const [arrowStyle] = useState<React.CSSProperties>({
      width: "50px",
      top: "-10%",
      left: "5%",
    });

    // Handle window resizing to apply responsive styles
    // useEffect(() => {
    //   const updateArrowStyle = () => {
    //     const width = window.innerWidth;
    //     if (width <= 768) {
    //       setArrowStyle({
    //         ...arrowStyle,
    //         fontSize: "20px",
    //         left: "-10%", // Adjust for smaller screens
    //       });
    //     } else if (width <= 1024) {
    //       setArrowStyle({
    //         ...arrowStyle,
    //         fontSize: "25px",
    //         left: "-9%",
    //       });
    //     } else {
    //       setArrowStyle({
    //         ...arrowStyle,
    //         fontSize: "30px",
    //         left: "-8%",
    //       });
    //     }
    //   };

    //   window.addEventListener("resize", updateArrowStyle);
    //   updateArrowStyle(); // Initial style setting

    //   return () => window.removeEventListener("resize", updateArrowStyle);
    // }, [arrowStyle]);

    return (
      <div
        style={{
          ...style,
          ...arrowStyle,
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
        onClick={onClick}
        className={`arrows ${className} `}
      >
        <CgArrowLongLeft style={{ width: "50px", color: "#837162" }} />
      </div>
    );
  };

  const SampleNextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    const [arrowStyle] = useState<React.CSSProperties>({
      width: "50px",
      top: "-10%",
      right: "5%",
    });

    // useEffect(() => {
    //   const updateArrowStyle = () => {
    //     const width = window.innerWidth;
    //     if (width <= 768) {
    //       setArrowStyle({
    //         ...arrowStyle,
    //         fontSize: "20px",
    //         left: "100%", // Adjust for smaller screens
    //       });
    //     } else if (width <= 1024) {
    //       setArrowStyle({
    //         ...arrowStyle,
    //         fontSize: "25px",
    //         left: "102%",
    //       });
    //     } else {
    //       setArrowStyle({
    //         ...arrowStyle,
    //         fontSize: "30px",
    //         left: "104%",
    //       });
    //     }
    //   };

    //   window.addEventListener("resize", updateArrowStyle);
    //   updateArrowStyle(); // Initial style setting

    //   return () => window.removeEventListener("resize", updateArrowStyle);
    // }, [arrowStyle]);

    return (
      <div
        style={{
          ...style,
          ...arrowStyle,
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
        onClick={onClick}
        className={`arrows ${className} `}
      >
        <CgArrowLongRight style={{ color: "#837162" }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3, // Default slidesToShow for large screens
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  const categoriseBook = () => {
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
    } else if (!bookLoading && filteredBook?.length == 0) {
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
        <div className="flex justify-between items-center flex-wrap w-full">
          <Slider {...settings} className="relative w-full">
            {filteredBook?.map((book: IBook) => {
              const genreName = genreData?.find((genre: IGenre) => {
                return genre?.id === book?.genre;
              });
              const authorName = authorData?.find((author: IAuthor) => {
                return author?.id === book?.author;
              })?.name;
              // #615651
              return (
                <Link key={book?.id} to={`/details/${book?.id}`}>
                  <div className="w-[90%] mx-auto md:mt-5 mt-5 mb-5 bg-white px-1 pt-12  relative shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] flex flex-col rounded-lg justify-between ">
                    <div className="flex justify-center">
                      <img
                        className="w-[204px] h-[261px] object-cover rounded-lg"
                        src={book?.image}
                        alt={book?.title}
                      />
                    </div>
                    <div className="py-4 px-6">
                      <div className="flex my-3 justify-between items-center">
                        <StarRatings
                          rating={book?.rating}
                          starRatedColor="#f3b763"
                          starDimension="25px"
                          starEmptyColor="#a9a9a9"
                          starSpacing="2px"
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                      <div className="flex justify-between items-center ">
                        <p className="uppercase text-[28px] caveat  text-[#4c453c]">
                          {book?.title}
                        </p>
                        <div className="absolute top-0 right-2  text-[#4c453c] text-[45px] caveat ">
                          ${book?.price}
                        </div>
                        <div className="badge bg-[#4c453c] text-white text-xs">
                          {genreName?.name}
                        </div>
                      </div>
                      <p className="footer-title text-[20px]  text-[#4c453c] caveat mb-5">
                        {authorName}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[#4c453c] caveat">
                          {book?.reviews_count} Review
                          {book?.reviews_count !== 1 &&
                          book?.reviews_count !== 0
                            ? "s"
                            : ""}
                        </p>

                        <div className="flex justify-end items-center">
                          <a
                            href="{% url 'book_detail' book.id %}"
                            className=" text-[#4c453c] text-[25px] caveat font-normal mr-2"
                          >
                            Details
                          </a>
                          <CgArrowLongRight className="text-[30px]  text-[#4c453c]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-between lg:m-10 mx-10 my-5 ">
      <div className="hidden lg:block w-[18%] bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center lg:text-[25px] md:text-[25px] uppercase font-bold caveat text-[#4c453c] mb-4">
          Categories
        </h2>
        {categoriseGenre()}
      </div>

      <div className="lg:w-[78%] md:w-full w-full">
        <div className="w-full lg:hidden md:block block bg-white p-4 mb-5 rounded-lg shadow-lg">
          <label className="input input-bordered flex items-center gap-2 w-1/2 border-dashed bg-white border-[#615b51] border-[2px] mx-auto rounded-xl">
            <select
              id="genre"
              //   multiple
              className="border-dashed border-0 bg-white"
              onChange={(e) => handleCategoryClick(Number(e.target.value))}
            >
              <option disabled selected>
                Genre
              </option>
              <option value="0">All</option>
              {genreData?.map((cuisine: IGenre) => {
                return (
                  <option
                    onClick={() => handleCategoryClick(cuisine?.id)}
                    key={cuisine?.id}
                    value={cuisine?.id}
                  >
                    {cuisine?.name || "Loading..."}
                  </option>
                );
              })}
              {/* <option value={1}>name</option> */}
            </select>
          </label>
        </div>
        <div className="w-full bg-white p-4 mb-5 rounded-lg shadow-lg">
          <label className="input input-bordered flex items-center gap-2 w-1/2 border-dashed bg-white border-[#615b51] border-[2px] mx-auto rounded-xl">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {categoriseBook()}
      </div>
    </div>
  );
};

export default Booklist;

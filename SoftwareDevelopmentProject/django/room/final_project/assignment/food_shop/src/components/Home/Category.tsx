import React, { ReactNode, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import { useGetMenuListQuery } from "../../redux/features/food/foodApi";
import { IFood } from "../../types/globalType";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SamplePrevArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={`ml-[-20px] arrows ${className}`}>
      <i
        className="fa fa-angle-left"
        style={{ color: "white", fontSize: "30px" }}
      ></i>
    </div>
  );
};

const SampleNextArrow = (props: ArrowProps) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={`mr-[-20px] arrows ${className}`}>
      <i
        className="fa fa-angle-right"
        style={{ color: "white", fontSize: "30px" }}
      ></i>
    </div>
  );
};

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
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

  // Fetch the menu list
  const { data, isLoading, error } = useGetMenuListQuery(undefined);

  // Handle category selection
  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  // Filter the menu based on the selected category
  const filteredMenu =
    selectedCategory === 0
      ? data
      : data?.filter((menu: IFood) => menu.category === selectedCategory);

  // Categorize rendering logic
  const categorise = () => {
    if (isLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (error) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong😓!
          </p>
        </div>
      );
    } else if (!isLoading && filteredMenu?.length == 0) {
      return (
        <>
          <div className="my-[200px]">
            <p className="text-red-500 text-lg text-center font-extrabold">
              No Menu Item Is Available In This Category😓!
            </p>
          </div>
        </>
      );
    } else {
      return (
        <Slider {...settings}>
          {filteredMenu?.map((menu: IFood) => (
            <Link key={menu.id} to={`/details/${menu.id}`}>
              <div className="px-5 pb-10">
                <div className="border-2 border-[#f9f9f9] group card bg-base-100 shadow-xl rounded-none">
                  <figure>
                    <img src={menu?.image} alt={menu?.title} />
                  </figure>
                  <div className="p-[32px] bg-[#f9f9f9] ">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-[20px] text-[#900A27] mb-3">
                        {menu?.title}
                      </p>
                      <p className="badge badge-outline text-[#900A27] border-2 font-semibold mb-3">
                        {menu?.category === 1
                          ? "Breakfast"
                          : menu?.category === 2
                          ? "Lunch"
                          : "Dinner"}
                      </p>
                    </div>
                    <p className="">
                      {menu?.description.split(" ").slice(0, 10).join(" ") +
                        (menu?.description.split(" ").length > 10 ? "..." : "")}
                    </p>
                    <div className="flex justify-between items-center">
                      <StarRatings
                        rating={menu?.rating}
                        starRatedColor="#FFBA5A"
                        starDimension="20px"
                        starEmptyColor="#a9a9a9"
                        starSpacing="2px"
                        numberOfStars={5}
                        name="rating"
                      />
                      <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                        {menu?.review_count} review
                        {menu?.review_count !== 1 && menu.review_count !== 0
                          ? "s"
                          : ""}
                      </p>
                    </div>
                    <div className="card-actions justify-center">
                      <div className="bg-[#900A27] w-4 h-4 rotate-45 mb-[-18px]"></div>
                      <div className="bg-[#bcbaba] transition-all group-hover:bg-[#900A27] w-full h-[1px]  "></div>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-[20px] font-semibold text-[#7d7d7d] mt-5">
                        ${menu?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      );
    }
  };

  return (
    <div className="relative">
      <p className="mt-10 mb-6 text-center text-[#3a3a3a] text-[30px] font-bold">
        Our Products
      </p>

      <div className="flex justify-center ">
        <p className="text-center font-semibold mb-24 w-[50%]">
          Quam pellentesque nec nam aliquam sem et tortor consequat. Ut placerat
          orci nulla pellentesque dignissim enim sit amet venenatis.
        </p>
      </div>
      <div className="flex justify-start w-[85%] mx-auto">
        {[0, 1, 2, 3].map((category) => (
          <p
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`mr-4 px-3 py-2 mt-[-30px] rounded-md mb-[30px] text-white font-semibold lg:text-[20px] md:text-[17px] text-[13px] cursor-pointer ${
              selectedCategory === category
                ? "bg-yellow-300 text-gray-700"
                : "bg-[#C00A27] hover:bg-yellow-300 hover:text-gray-700"
            }`}
          >
            {category === 0
              ? "All"
              : category === 1
              ? "Breakfast"
              : category === 2
              ? "Lunch"
              : "Dinner"}
          </p>
        ))}
      </div>
      <div
        className="slider-container"
        style={{ width: "90%", margin: "auto" }} // Responsive container
      >
        {categorise()}
      </div>
    </div>
  );
};

export default Category;

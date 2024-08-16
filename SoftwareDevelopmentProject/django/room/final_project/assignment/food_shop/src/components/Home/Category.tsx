import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default slidesToShow for large screens
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 3000,
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
        <p className="mr-4 bg-[#C00A27] hover:bg-yellow-300 hover:text-gray-700 px-3 py-2 mt-[-30px] rounded-md mb-[30px] text-white font-semibold text-[20px]">
          Deshi
        </p>
        <p className="mr-4 bg-[#C00A27] hover:bg-yellow-300 hover:text-gray-700 px-3 py-2 mt-[-30px] rounded-md mb-[30px] text-white font-semibold text-[20px]">
          Chinese
        </p>
        <p className="mr-4 bg-[#C00A27] hover:bg-yellow-300 hover:text-gray-700 px-3 py-2 mt-[-30px] rounded-md mb-[30px] text-white font-semibold text-[20px]">
          Indian
        </p>
        <p className="mr-4 bg-[#C00A27] hover:bg-yellow-300 hover:text-gray-700 px-3 py-2 mt-[-30px] rounded-md mb-[30px] text-white font-semibold text-[20px]">
          Thai
        </p>
      </div>
      <div
        className="slider-container"
        style={{ width: "90%", margin: "auto" }} // Responsive container
      >
        <Slider {...settings}>
          <div className="px-5 pb-10">
            <div className="border-2 border-[#f9f9f9] group card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img
                  src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-7.jpg?v=1589800448&width=360"
                  alt="Shoes"
                />
              </figure>
              <div className="p-[32px] bg-[#f9f9f9] ">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[20px] text-[#900A27] mb-3">
                    Shoes!
                  </p>
                  <p className="badge badge-outline text-[#900A27] border-2 font-semibold mb-3">
                    Deshi
                  </p>
                </div>
                <p className="">
                  If a dog chews shoes whose shoes does he choose?
                  <div className="flex justify-between">
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      1 review
                    </p>
                  </div>
                </p>
                <div className="card-actions justify-center">
                  <div className="bg-[#900A27] w-4 h-4 rotate-45 mb-[-18px]"></div>
                  <div className="bg-[#bcbaba] transition-all group-hover:bg-[#900A27] w-full h-[1px]  "></div>
                </div>
                <div className="flex justify-center">
                  <p className="text-[20px] font-semibold text-[#7d7d7d] mt-5">
                    $34.5
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pb-10">
            <div className="border-2 border-[#f9f9f9] group card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img
                  src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-7.jpg?v=1589800448&width=360"
                  alt="Shoes"
                />
              </figure>
              <div className="p-[32px] bg-[#f9f9f9] ">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[20px] text-[#900A27] mb-3">
                    Shoes!
                  </p>
                  <p className="badge badge-outline text-[#900A27] border-2 font-semibold mb-3">
                    Deshi
                  </p>
                </div>
                <p className="">
                  If a dog chews shoes whose shoes does he choose?
                  <div className="flex justify-between">
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      1 review
                    </p>
                  </div>
                </p>
                <div className="card-actions justify-center">
                  <div className="bg-[#900A27] w-4 h-4 rotate-45 mb-[-18px]"></div>
                  <div className="bg-[#bcbaba] transition-all group-hover:bg-[#900A27] w-full h-[1px]  "></div>
                </div>
                <div className="flex justify-center">
                  <p className="text-[20px] font-semibold text-[#7d7d7d] mt-5">
                    $34.5
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pb-10">
            <div className="border-2 border-[#f9f9f9] group card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img
                  src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-7.jpg?v=1589800448&width=360"
                  alt="Shoes"
                />
              </figure>
              <div className="p-[32px] bg-[#f9f9f9] ">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[20px] text-[#900A27] mb-3">
                    Shoes!
                  </p>
                  <p className="badge badge-outline text-[#900A27] border-2 font-semibold mb-3">
                    Deshi
                  </p>
                </div>
                <p className="">
                  If a dog chews shoes whose shoes does he choose?
                  <div className="flex justify-between">
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      1 review
                    </p>
                  </div>
                </p>
                <div className="card-actions justify-center">
                  <div className="bg-[#900A27] w-4 h-4 rotate-45 mb-[-18px]"></div>
                  <div className="bg-[#bcbaba] transition-all group-hover:bg-[#900A27] w-full h-[1px]  "></div>
                </div>
                <div className="flex justify-center">
                  <p className="text-[20px] font-semibold text-[#7d7d7d] mt-5">
                    $34.5
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pb-10">
            <div className="border-2 border-[#f9f9f9] group card bg-base-100 shadow-xl rounded-none">
              <figure>
                <img
                  src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-7.jpg?v=1589800448&width=360"
                  alt="Shoes"
                />
              </figure>
              <div className="p-[32px] bg-[#f9f9f9] ">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[20px] text-[#900A27] mb-3">
                    Shoes!
                  </p>
                  <p className="badge badge-outline text-[#900A27] border-2 font-semibold mb-3">
                    Deshi
                  </p>
                </div>
                <p className="">
                  If a dog chews shoes whose shoes does he choose?
                  <div className="flex justify-between">
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                      1 review
                    </p>
                  </div>
                </p>
                <div className="card-actions justify-center">
                  <div className="bg-[#900A27] w-4 h-4 rotate-45 mb-[-18px]"></div>
                  <div className="bg-[#bcbaba] transition-all group-hover:bg-[#900A27] w-full h-[1px]  "></div>
                </div>
                <div className="flex justify-center">
                  <p className="text-[20px] font-semibold text-[#7d7d7d] mt-5">
                    $34.5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;

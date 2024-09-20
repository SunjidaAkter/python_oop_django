// import { ReactNode } from "react";
import { GoPerson } from "react-icons/go";
import bg from "../../assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTM2OTgxMy1pbWFnZS1rd3Z4eHA5MS5qcGc.webp";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
// Define the Arrow component with responsive styles
const SamplePrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({
    top: "50%",
    left: "-10%",
    fontSize: "30px",
  });

  // Handle window resizing to apply responsive styles
  useEffect(() => {
    const updateArrowStyle = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setArrowStyle({
          ...arrowStyle,
          fontSize: "20px",
          left: "-10%", // Adjust for smaller screens
        });
      } else if (width <= 1024) {
        setArrowStyle({
          ...arrowStyle,
          fontSize: "25px",
          left: "-9%",
        });
      } else {
        setArrowStyle({
          ...arrowStyle,
          fontSize: "30px",
          left: "-8%",
        });
      }
    };

    window.addEventListener("resize", updateArrowStyle);
    updateArrowStyle(); // Initial style setting

    return () => window.removeEventListener("resize", updateArrowStyle);
  }, [arrowStyle]);

  return (
    <div
      style={{
        ...style,
        ...arrowStyle,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
      className={`arrows ${className} `}
    >
      <i className="fa fa-angle-left" style={{ color: "white" }}></i>
    </div>
  );
};

const SampleNextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({
    top: "50%",
    left: "105%",
    fontSize: "30px",
  });

  useEffect(() => {
    const updateArrowStyle = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setArrowStyle({
          ...arrowStyle,
          fontSize: "20px",
          left: "100%", // Adjust for smaller screens
        });
      } else if (width <= 1024) {
        setArrowStyle({
          ...arrowStyle,
          fontSize: "25px",
          left: "102%",
        });
      } else {
        setArrowStyle({
          ...arrowStyle,
          fontSize: "30px",
          left: "104%",
        });
      }
    };

    window.addEventListener("resize", updateArrowStyle);
    updateArrowStyle(); // Initial style setting

    return () => window.removeEventListener("resize", updateArrowStyle);
  }, [arrowStyle]);

  return (
    <div
      style={{
        ...style,
        ...arrowStyle,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
      className={`arrows ${className} `}
    >
      <i className="fa fa-angle-right" style={{ color: "white" }}></i>
    </div>
  );
};
const ReviewSection = () => {
  const settings = {
    ClassNames: "center",
    dots: true,
    infinite: true,
    slidesToShow: 1, // Default slidesToShow for large screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    // centerMode: true,
    // centerPadding: "60px",
    autoplaySpeed: 8000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "none",
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
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-fixed w-full mt-10"
    >
      <div className="w-full bg-black bg-opacity-50">
        <Fade cascade direction="up" duration={1000}>
          <p className="pt-10 mb-6 text-center text-white text-[30px] sm:text-[30px] font-bold">
            Our Flavorful Menus
          </p>
        </Fade>
        <Fade cascade direction="up" duration={1000} delay={200}>
          <p className="text-center text-white font-semibold text-[20px]">
            Odio morbi quis commodo odio aenean sed adipiscing. Neque ornare
            aenean{" "}
          </p>
        </Fade>
        <Fade cascade direction="up" duration={1000} delay={400}>
          <p className="mb-16 text-center text-white font-semibold text-[20px] ">
            euismod elementum nisi quis.
          </p>
        </Fade>
        <Slider className=" mx-auto w-[80%] overflow" {...settings}>
          <div className="w-full">
            <div className="lg:w-[60%] w-[90%] mx-auto bg-white group my-10 py-10 relative flex flex-col justify-center items-center">
              <div className="group-hover:border-[#C00A27] border-[#3A3A3A] border-[5px]  w-[90%] flex flex-col justify-center items-center">
                <p className="bg-white group-hover:text-[#3A3A3A] text-[#C00A27] font-extrabold text-[60px] absolute top-0 left-0 p-3">
                  <RiDoubleQuotesL />
                </p>
                <p className="bg-white group-hover:text-[#3A3A3A]  text-[#C00A27] font-extrabold text-[60px] absolute bottom-0 right-0 p-3">
                  <RiDoubleQuotesR />
                </p>
                <div className="flex justify-between items-center flex-wrap">
                  <img
                    className="lg:w-[40%] w-[70%] mx-auto"
                    src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-4.jpg?v=1589797939&width=360"
                    alt=""
                  />
                  <div className="lg:w-[60%] w-full">
                    <div className="w-[80%] mx-auto my-10">
                      <p className="text-[20px] text-left font-bold group-hover:text-[#3A3A3A] text-[#C00A27] mb-3">
                        English Breakfast
                      </p>
                      <StarRatings
                        rating={5}
                        starRatedColor="#FFBA5A"
                        starDimension="25px"
                        starEmptyColor="#a9a9a9"
                        starSpacing="3px"
                        numberOfStars={5}
                        name="rating"
                      />
                      <div className="mt-3 flex justify-start items-start mb-5 md:mb-0">
                        <GoPerson
                          className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-3 md:mr-3 
                      text-[30px] md:text-[30px]" // Responsive size using Tailwind
                        />
                        <p className="text-[#686464] font-bold text-[16px] md:text-[15px]">
                          User Name
                        </p>
                      </div>
                      <p className="text-[20px] mb-1 font-semibold text-[#3A3A3A] mt-5">
                        Great
                      </p>
                      <p
                        style={{ overflowWrap: "break-word" }}
                        className="text-[#3A3A3A] w-full"
                      >
                        This food is just mind blowing and the service was also
                        good!! XO XO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:w-[60%] w-[90%] mx-auto bg-white group my-10 py-10 relative flex flex-col justify-center items-center">
              <div className="group-hover:border-[#C00A27] border-[#3A3A3A] border-[5px]  w-[90%] flex flex-col justify-center items-center">
                <p className="bg-white group-hover:text-[#3A3A3A] text-[#C00A27] font-extrabold text-[60px] absolute top-0 left-0 p-3">
                  <RiDoubleQuotesL />
                </p>
                <p className="bg-white group-hover:text-[#3A3A3A]  text-[#C00A27] font-extrabold text-[60px] absolute bottom-0 right-0 p-3">
                  <RiDoubleQuotesR />
                </p>
                <div className="flex justify-between items-center flex-wrap">
                  <img
                    className="lg:w-[40%] w-[70%] mx-auto"
                    src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-4.jpg?v=1589797939&width=360"
                    alt=""
                  />
                  <div className="lg:w-[60%] w-full">
                    <div className="w-[80%] mx-auto my-10">
                      <p className="text-[20px] text-left font-bold group-hover:text-[#3A3A3A] text-[#C00A27] mb-3">
                        English Breakfast
                      </p>
                      <StarRatings
                        rating={5}
                        starRatedColor="#FFBA5A"
                        starDimension="25px"
                        starEmptyColor="#a9a9a9"
                        starSpacing="3px"
                        numberOfStars={5}
                        name="rating"
                      />
                      <div className="mt-3 flex justify-start items-start mb-5 md:mb-0">
                        <GoPerson
                          className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-3 md:mr-3 
                      text-[30px] md:text-[30px]" // Responsive size using Tailwind
                        />
                        <p className="text-[#686464] font-bold text-[16px] md:text-[15px]">
                          User Name
                        </p>
                      </div>
                      <p className="text-[20px] mb-1 font-semibold text-[#3A3A3A] mt-5">
                        Great
                      </p>
                      <p
                        style={{ overflowWrap: "break-word" }}
                        className="text-[#3A3A3A] w-full"
                      >
                        This food is just mind blowing and the service was also
                        good!! XO XO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:w-[60%] w-[90%] mx-auto bg-white group my-10 py-10 relative flex flex-col justify-center items-center">
              <div className="group-hover:border-[#C00A27] border-[#3A3A3A] border-[5px]  w-[90%] flex flex-col justify-center items-center">
                <p className="bg-white group-hover:text-[#3A3A3A] text-[#C00A27] font-extrabold text-[60px] absolute top-0 left-0 p-3">
                  <RiDoubleQuotesL />
                </p>
                <p className="bg-white group-hover:text-[#3A3A3A]  text-[#C00A27] font-extrabold text-[60px] absolute bottom-0 right-0 p-3">
                  <RiDoubleQuotesR />
                </p>
                <div className="flex justify-between items-center flex-wrap">
                  <img
                    className="lg:w-[40%] w-[70%] mx-auto"
                    src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-4.jpg?v=1589797939&width=360"
                    alt=""
                  />
                  <div className="lg:w-[60%] w-full">
                    <div className="w-[80%] mx-auto my-10">
                      <p className="text-[20px] text-left font-bold group-hover:text-[#3A3A3A] text-[#C00A27] mb-3">
                        English Breakfast
                      </p>
                      <StarRatings
                        rating={5}
                        starRatedColor="#FFBA5A"
                        starDimension="25px"
                        starEmptyColor="#a9a9a9"
                        starSpacing="3px"
                        numberOfStars={5}
                        name="rating"
                      />
                      <div className="mt-3 flex justify-start items-start mb-5 md:mb-0">
                        <GoPerson
                          className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-3 md:mr-3 
                      text-[30px] md:text-[30px]" // Responsive size using Tailwind
                        />
                        <p className="text-[#686464] font-bold text-[16px] md:text-[15px]">
                          User Name
                        </p>
                      </div>
                      <p className="text-[20px] mb-1 font-semibold text-[#3A3A3A] mt-5">
                        Great
                      </p>
                      <p
                        style={{ overflowWrap: "break-word" }}
                        className="text-[#3A3A3A] w-full"
                      >
                        This food is just mind blowing and the service was also
                        good!! XO XO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;

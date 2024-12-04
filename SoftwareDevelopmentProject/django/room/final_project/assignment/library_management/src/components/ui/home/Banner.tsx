import { useEffect } from "react";
import "../../../App.css";
import { CgArrowLongRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const Banner = () => {
  useEffect(() => {
    let index = 0;
    const images = document.querySelectorAll(".image");
    const totalImages = images.length;

    const intervalId = setInterval(() => {
      images.forEach((image, i) => {
        image.classList.remove("image-1", "image-2", "image-3");
        if (i === index % totalImages) {
          image.classList.add("image-2");
        } else if (i === (index + 1) % totalImages) {
          image.classList.add("image-3");
        } else {
          image.classList.add("image-1");
        }
      });
      index++;
    }, 3000); // Change image every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect once on component mount

  return (
    <div className="">
      <div className="lg:m-10 mx-10 my-5 lg:px-24 px-10 md:pt-24 md:pb-16 pt-8 pb-8 lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col-reverse justify-center items-center bg-white rounded-lg shadow-lg">
        <div className="lg:pl-16 px-0 lg:mt-[-50px] md:mt-[50px] mt-[30px] lg:w-[48%] md:w-full w-full">
          <p className="leading-none text-[50px] md:text-[70px] lg:text-[90px] lg:text-start md:text-center text-center font-thin text-[#4c453c] lilita">
            New & Trendy{" "}
          </p>
          <p className="lg:text-4xl md:text-[25px] text-[20px] text-center lg:text-start md:mt-10 mt-5 md:mb-7 mb-3 font-thin text-[#46413a] caveat">
            Explore New Books Everyday
          </p>
          <NavLink to="/books">
            <div className="lg:flex lg:justify-start md:flex md:justify-center flex justify-center">
              <button className="shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold mt-4 hover:bg-[#837162]  hover:text-[white]  text-[#4c453c] text-[20px]">
                Find Your Favourite
                <CgArrowLongRight className="text-[30px] group-hover:text-[white] text-[#4c453c]" />
              </button>
            </div>
          </NavLink>
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-full">
          <div className="image-container lg:mb-20 md:mb-10 mb-4" id="carousel">
            <img
              src="https://m.media-amazon.com/images/I/81n1Vz7OyZL._SY342_.jpg"
              alt="Image 1"
              className="image image-1"
              id="image image-1"
            />
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDYxMDFjMGYtMTg2NS00NjFjLTg0N2MtYzY3YzI4MmE3NDNhXkEyXkFqcGdeQXVyODgwMTU1NjE@._V1_FMjpg_UX736_.jpg"
              alt="Image 2"
              className="image image-2"
              id="image image-2"
            />
            <img
              src="https://m.media-amazon.com/images/I/81xIPfJ6iUL._SY342_.jpg"
              alt="Image 3"
              className="image image-3"
              id="image image-3"
            />
          </div>
          <p className="lg:text-5xl md:text-[35px] text-[20px] text-center font-medium text-[#4c453c] caveat">
            Most Popular This Week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

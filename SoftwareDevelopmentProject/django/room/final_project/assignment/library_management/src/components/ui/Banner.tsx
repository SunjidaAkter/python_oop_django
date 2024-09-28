import { useEffect } from "react";
import "../../App.css";
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
      <div className="m-10 px-32 pt-32 pb-16 flex justify-center items-center bg-[#fef5e6] rounded-3xl shadow-lg">
        <div className="pl-16 mt-[-50px] w-[50%]">
          <p className="leading-none text-[100px] font-medium text-[#615b51] lilita">
            New & <br />
            Trendy{" "}
          </p>
          <p className="text-4xl mt-10 mb-7 font-medium text-[#615b51] caveat">
            Explore New Books Everyday
          </p>
          <label className="input flex items-center w-[65%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-7 h-7 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow py-3 px-5 rounded-full placeholder:caveat"
              placeholder="Search Books"
            />
          </label>
        </div>
        <div className="w-[50%]">
          <div className="image-container mb-20" id="carousel">
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
          <p className="text-5xl text-center font-medium text-[#615b51] caveat">
            Most Popular This Week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

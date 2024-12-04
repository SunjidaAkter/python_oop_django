import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const GalleryComponent = () => {
  return (
    <div className="w-full">
      <Fade direction="up" cascade duration={1000}>
        <p className="my-10 text-center text-[#3a3a3a] text-[30px] font-bold">
          Our Gallery
        </p>
      </Fade>

      {/* Container to ensure consistent layout */}
      <Fade cascade duration={3000} className="overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-1/3 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-10">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-2 font-bold">
                  Mexican Bread
                </p>
                <p className="text-white lg:text-xl text-[10px] font-semibold">
                  A Classic Mexican Dish
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
          <div className="w-1/3 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/1.jpg?v=1614335085&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-10">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-2 font-bold">
                  Chinese Rice
                </p>
                <p className="text-white lg:text-xl text-[10px] font-semibold">
                  Fresh and Delicious Chinese Rice
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
          <div className="w-1/3 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/2.jpg?v=1614335086&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-10">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-2 font-bold">
                  Nonveg Salad
                </p>
                <p className="text-white lg:text-xl text-[10px] font-semibold">
                  A Tasty and Healthy Salad
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </Fade>
      {/* Second row of images */}
      <Fade cascade duration={3000} className="overflow-hidden">
        <div className="flex flex-wrap ">
          <div className="w-1/4 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-1.jpg?v=1614334580&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-10">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-1 font-bold">
                  Pizza
                </p>
                <p className="text-white lg:text-xl text-[7px] font-semibold">
                  Tasty and Delicious Pizza Lunch
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
          <div className="w-1/4 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-6.jpg?v=1614334580&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-20">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-1 font-bold">
                  Cookies
                </p>
                <p className="text-white lg:text-xl text-[7px] font-semibold">
                  Tasty and Healthy Chocolate Dessert
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
          <div className="w-1/4 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-2.jpg?v=1614334580&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-10">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-1 font-bold">
                  Pasta
                </p>
                <p className="text-white lg:text-xl text-[7px] font-semibold">
                  Tasty and Healthy Red Sauce Pasta
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
          <div className="w-1/4 p-[1px] group relative">
            {/* <Fade cascade duration={7000}> */}
            <div className="overflow-hidden">
              <img
                className="w-full h-auto transform group-hover:scale-125 transition-transform duration-1000"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-4.jpg?v=1614334580&width=1500"
                alt=""
              />
              <div className="border-[2px] lg:m-5 m-0 border-[#C00A27] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-center items-center z-10">
                <p className="text-white lg:text-4xl text-sm lg:mb-5 mb-1 font-bold">
                  Lunch
                </p>
                <p className="text-white lg:text-xl text-[7px] font-semibold">
                  Tasty and Delicious Lunch Combo
                </p>
                <NavLink to="/menu">
                  <p className="lg:my-5 my-1 lg:p-3 p-1 bg-[#C00A27] text-white hover:text-black hover:bg-yellow-500 transition-colors duration-500 lg:text-[20px] text-[10px]">
                    View All Menu
                  </p>
                </NavLink>
              </div>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default GalleryComponent;

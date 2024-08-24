const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://yummi-theme.myshopify.com/cdn/shop/files/slide1-bg.jpg?v=1614338364)",
            }}
          >
            <div className="ml-4 lg:ml-20 text-left text-white">
              <div className="lg:w-1/2 md:w-2/3 w-full px-16 lg:px-0">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold text-[#f4b618]">
                  Welcome to Yummi
                </h1>
                <p className="mb-5 text-md md:text-lg">
                  Discover the finest selection of gourmet foods, curated just
                  for you. Indulge in a world of flavors and enjoy a dining
                  experience like no other.
                </p>
                <button className="btn bg-[#f4b618] text-black">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn bg-[#c00a27] text-white hover:bg-[#f4b618] border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn bg-[#c00a27] text-white hover:bg-[#f4b618] border-none"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://yummi-theme.myshopify.com/cdn/shop/files/slide2-bg.jpg?v=1614338365)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-center text-white">
              <div className=" w-[80%] mx-auto px-8">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold text-[#f4b618]">
                  Gourmet Delights
                </h1>
                <p className="mb-5 text-sm md:text-lg">
                  Our chefs are passionate about bringing you the finest
                  culinary creations. Enjoy a symphony of tastes with every
                  bite.
                </p>
                <button className="btn bg-[#f4b618] text-black">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn bg-[#c00a27] text-white hover:bg-[#f4b618] border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn bg-[#c00a27] text-white hover:bg-[#f4b618] border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

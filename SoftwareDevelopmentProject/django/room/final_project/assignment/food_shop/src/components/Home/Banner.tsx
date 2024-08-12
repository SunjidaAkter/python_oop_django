const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://yummi-theme.myshopify.com/cdn/shop/files/slide1-bg.jpg?v=1614338364)",
            }}
          >
            <div className="ml-[10px] px=0 text-left text-white">
              <div className="w-1/2">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-white text-black">Get Started</button>
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
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://yummi-theme.myshopify.com/cdn/shop/files/slide2-bg.jpg?v=1614338365)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className=" px=0 text-center text-white">
              {" "}
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>{" "}
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-white text-black">Get Started</button>{" "}
              </div>{" "}
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
{
  /* <div id="slide3" className="carousel-item relative w-full">
  <div
    className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://cdn.shopify.com/s/files/1/0013/2661/2531/files/slider-1_ec47c9ab-a301-48cf-8aef-9c9b4fef2946.jpg?v=1652416846)",
    }}
  >
    <div className="hero-overlay bg-opacity-40"></div>
    <div className="ml-[10px] px=0 text-left text-white">
      <div className="w-1/2">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">
      ❮
    </a>
    <a href="#slide1" className="btn btn-circle">
      ❯
    </a>
  </div>
</div>; */
}

const Latest = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-1.jpg?v=1614334584&width=1920)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="lg:px-28 md:px-16 sm:px-8 px-4"
      >
        <div className="lg:w-[70%] w-full py-20 lg:pl-28 pl-4">
          <h1 className="text-white text-[32px] font-bold pb-5">
            Upgrade To The Latest Taste!
          </h1>
          <p className="text-white text-[17px] pb-4">
            Discover the freshest flavors that blend tradition with innovation.
            Our chefs have curated dishes that tantalize your taste buds and
            elevate your dining experience to a new level.
          </p>
          <p className="text-white text-[17px] pb-4">
            Savor every bite as we bring you a perfect harmony of taste and
            texture, designed to leave you craving more. It's not just a meal;
            it's a journey through culinary excellence.
          </p>
          <img
            src="https://yummi-theme.myshopify.com/cdn/shop/files/signature.png?v=1614334584&width=200"
            alt=""
          />
          <p className="text-white text-[17px] font-semibold mt-6">
            Tanya - Executive Chef
          </p>
        </div>
      </div>
    </div>
  );
};

export default Latest;

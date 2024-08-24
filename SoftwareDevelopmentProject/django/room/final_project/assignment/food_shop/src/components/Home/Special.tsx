const Special = () => {
  return (
    <div className="px-4 lg:px-16 pt-10">
      <p className="text-center text-[#3a3a3a] text-2xl lg:text-[30px] font-bold">
        International Cuisines
      </p>
      <p className="text-center font-semibold text-lg">
        Discover Incredibly Tasty Dishes from Around the World
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-8">
        <div className="lg:w-[25%] w-full mb-8 lg:mb-0">
          <div className="mb-5 flex justify-between items-center">
            <div>
              <p className="text-[20px] font-semibold text-right text-[#93051c]">
                African Cuisines
              </p>
              <p className="text-right">
                Experience the rich and diverse flavors of Africa, from spicy
                stews to fresh and flavorful salads.
              </p>
            </div>
            <img
              className="ml-[22px] w-[60px] h-[60px]"
              src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-6.png?v=1614334577&width=710"
              alt="African Cuisines"
            />
          </div>
          <div className="mb-5 flex justify-between items-center">
            <div>
              <p className="text-[20px] font-semibold text-right text-[#93051c]">
                Asian Cuisines
              </p>
              <p className="text-right">
                Delight in the aromatic spices and balanced flavors that define
                Asian cuisine, from sushi to curry.
              </p>
            </div>
            <img
              className="ml-[22px] w-[60px] h-[60px]"
              src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-5.png?v=1614334577&width=710"
              alt="Asian Cuisines"
            />
          </div>
          <div className="mb-5 flex justify-between items-center">
            <div>
              <p className="text-[20px] font-semibold text-right text-[#93051c]">
                European Cuisines
              </p>
              <p className="text-right">
                Savor the classic dishes of Europe, from Italian pasta to French
                pastries, all crafted with tradition in mind.
              </p>
            </div>
            <img
              className="ml-[22px] w-[60px] h-[60px]"
              src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-4.png?v=1614334577&width=710"
              alt="European Cuisines"
            />
          </div>
        </div>
        <div className="lg:w-[25%] w-full mb-8 lg:mb-0">
          <img
            src="https://yummi-theme.myshopify.com/cdn/shop/files/middle-img.png?v=1614334578"
            alt="International Dishes"
            className="mx-auto"
          />
        </div>
        <div className="lg:w-[25%] w-full">
          <div className="mb-5 flex justify-between items-center">
            <img
              className="w-[60px] h-[60px] mr-[22px]"
              src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-3.png?v=1614334577&width=710"
              alt="Middle Eastern Cuisines"
            />
            <div>
              <p className="text-[20px] font-semibold text-[#93051c]">
                Middle Eastern Cuisines
              </p>
              <p>
                Indulge in the rich flavors and textures of Middle Eastern
                cuisine, from hummus to kebabs.
              </p>
            </div>
          </div>
          <div className="mb-5 flex justify-between items-center">
            <img
              className="w-[60px] h-[60px] mr-[22px]"
              src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-2.png?v=1614334577&width=710"
              alt="Latin American Cuisines"
            />
            <div>
              <p className="text-[20px] font-semibold text-[#93051c]">
                Latin American Cuisines
              </p>
              <p>
                Discover the vibrant and colorful dishes of Latin America, full
                of zest and flavor.
              </p>
            </div>
          </div>
          <div className="mb-5 flex justify-between items-center">
            <img
              className="w-[60px] h-[60px] mr-[22px]"
              src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-1.png?v=1614334577&width=710"
              alt="North American Cuisines"
            />
            <div>
              <p className="text-[20px] font-semibold text-[#93051c]">
                North American Cuisines
              </p>
              <p>
                Enjoy the comforting and diverse flavors of North American
                cuisine, from barbecue to maple syrup-infused dishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;

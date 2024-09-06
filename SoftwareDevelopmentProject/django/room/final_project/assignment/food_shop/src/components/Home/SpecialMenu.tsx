import { Fade } from "react-awesome-reveal";
const SpecialMenu = () => {
  return (
    <div className="bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920)] bg-cover flex justify-center w-full">
      {/* <div className=""> */}
      <div className="mx-auto w-[80%] flex justify-between my-10">
        <img
          className="w-[50%]"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/img-1.jpg?v=1614334579"
          alt=""
        />
        <div className="w-[45%]">
          <Fade cascade duration={1000} direction="up">
            <p className="text-[30px] font-semibold text-[#3A3A3A] pt-5">
              What Makes Our Menus Special ?
            </p>
          </Fade>
          <Fade cascade duration={1000} direction="up">
            <div className="group flex justify-between mt-5 w-[80%] flip-container">
              <img
                className="mr-5 flip-image"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-7_c08b5cdb-f091-48b2-93c1-e09b38cca5f1.png?v=1614334579&width=710"
                alt=""
              />
              <div>
                <p className="text-[#900A27] group-hover:text-yellow-500 transition-all duration-500 mb-1 text-[25px] font-semibold">
                  Pure Ingredients
                </p>
                <p>
                  Vestibulum morbi blandit cursus risus at ultrices mi.
                  Facilisis gravida neque convallis a.
                </p>
              </div>
            </div>
          </Fade>
          <Fade cascade duration={1000} direction="up">
            <div className="group flex justify-between mt-3 w-[80%] flip-container">
              <img
                className="mr-5 flip-image"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-8_3fa55acb-a7d3-4358-9a71-260d4a3d61ae.png?v=1614334579&width=710"
                alt=""
              />
              <div>
                <p className="text-[#900A27] group-hover:text-yellow-500 transition-all duration-500 mb-1 text-[25px] font-semibold">
                  Sustainability
                </p>
                <p>
                  Laculis eu non diam phasellus. Dictum non consectetur a erat
                  nam at. Quam adipiscing vitae proin sagittis.
                </p>
              </div>
            </div>
          </Fade>
          <Fade cascade duration={1000} direction="up">
            <div className="group flex justify-between mt-3 w-[80%] flip-container">
              <img
                className="mr-5 flip-image"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-9.png?v=1614334579&width=710"
                alt=""
              />
              <div>
                <p className="text-[#900A27] group-hover:text-yellow-500 transition-all duration-500 mb-1 text-[25px] font-semibold">
                  Environmentalism
                </p>
                <p>
                  Bibendum est ultricies integer quis auctor elit sed. Accumsan
                  tortor posuere ac ut consequat semper.
                </p>
              </div>
            </div>
          </Fade>
          <Fade cascade duration={1000} direction="up">
            <div className="group flex justify-between mt-3 w-[80%] flip-container">
              <img
                className="mr-5 flip-image"
                src="https://yummi-theme.myshopify.com/cdn/shop/files/icon-10.png?v=1614334579&width=710"
                alt=""
              />
              <div>
                <p className="text-[#900A27] group-hover:text-yellow-500 transition-all duration-500 mb-1 text-[25px] font-semibold">
                  Formula Transparency
                </p>
                <p>
                  Facilisi nullam vehicula ipsum a. Ornare massa eget egestas
                  purus viverra accumsan in nisl nisi.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;

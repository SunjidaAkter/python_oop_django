import { Fade } from "react-awesome-reveal";
const DiscountSection = () => {
  return (
    <div className="bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-2.jpg?v=1614334584&width=1920)] bg-cover bg-fixed bg-no-repeat w-full flex justify-center items-center">
      <div className="my-36 w-[60%]">
        <Fade cascade direction="up" duration={2000}>
          <p className="text-[#3A3A3A] font-bold text-[20px] text-center my-3">
            Enjoy Great Recipe{" "}
          </p>
        </Fade>
        <Fade cascade direction="up" duration={2000} delay={500}>
          <p className="text-[#900A27] lg:text-[60px] md:text-[60px] text-[30px] font-semibold text-center my-3">
            Simple And Delicious Food
          </p>
        </Fade>
        <Fade cascade direction="up" duration={2000} delay={1000}>
          <p className="text-[#3A3A3A] font-semibold text-[40px] text-center my-3">
            With Special Discount
          </p>
        </Fade>
        <div className="flex justify-center items-center mt-10 font-medium">
          <p className="bg-[#900A27] hover:bg-yellow-500 text-[white] hover:text-[#3A3A3A] transition-colors duration-500 p-4 text-center w-[20%]">
            Order Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;

import StarRatings from "react-star-ratings";
const Product = () => {
  return (
    <div className="w-80% mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex justify-center w-[50%]">
          <img
            className="w-[70%]"
            src="https://yummi-theme.myshopify.com/cdn/shop/products/shop-4.jpg?v=1589797939&width=1946"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <div className="w-[60%] ">
            <p className="text-[36px] font-bold text-[#686464] mb-5">Buldak</p>
            <p className="text-[18px] text-[#686464] mb-3">
              Everyone has a different idea of what they mean by the word
              "fitness," but it generally refers to their level of health and
              well-being. Being fit involves all three facets...
            </p>
            <div className="mb-5">
              <StarRatings
                rating={4}
                starRatedColor="#FFBA5A"
                starDimension="30px"
                starEmptyColor="#a9a9a9"
                starSpacing="3px"
                numberOfStars={5}
                name="rating"
              />
              <p className="text-[#686464] ml-5 text-[16px] inline-block font-bold">
                {" "}
                1 review
              </p>
            </div>
            <div className="flex justify-start">
              <div className="w-[35%]">
                <p className="text-[20px] font-semibold text-[#686464] mb-5">
                  Price :
                </p>
                <p className="text-[20px] font-semibold text-[#686464] mb-5">
                  Cuisine :
                </p>
                <p className="text-[20px] font-semibold text-[#686464] mb-5">
                  Type :
                </p>
                <p className="text-[20px] font-semibold text-[#686464] mb-5">
                  Quantity :
                </p>
              </div>
              <div className="w-[65%]">
                <p className="text-[20px] font-semibold text-[#686464] mb-5">
                  $45.67
                </p>
                <div className="mb-5">
                  <p className="inline mr-2 text-[18px] border-2 border-[#686464] rounded-sm px-3 font-semibold text-[#686464] mb-5">
                    Deshi
                  </p>
                  <p className="inline mr-2 text-[18px] border-2 border-[#686464] rounded-sm px-3 font-semibold text-[#686464] mb-5">
                    Deshi
                  </p>
                  <p className="inline mr-2 text-[18px] border-2 border-[#686464] rounded-sm px-3 font-semibold text-[#686464] mb-5">
                    Deshi
                  </p>
                </div>
                <div className="mb-5">
                  <p className="inline text-[18px] border-2 border-[#686464] rounded-sm px-3 font-semibold text-[#686464] mb-5">
                    Dinner
                  </p>
                </div>
                <div className="flex justify-start">
                  <div className="border-2 hover:border border-[#686464] rounded-none w-10 h-10 flex justify-center items-center font-bold hover:bg-[#C00A27] hover:text-white text-[#686464]">
                    +
                  </div>
                  <input
                    className="font-bold text-[#686464] pl-4 border-y-2 border-[#686464] rounded-none w-10 h-10"
                    type=""
                    name=""
                    id=""
                    value={2}
                  />
                  <div className="border-2 hover:border border-[#686464] rounded-none w-10 h-10 flex justify-center items-center font-bold hover:bg-[#C00A27] hover:text-white text-[#686464]">
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-5">
              <p className="w-[48%] bg-[#C00A27] text-white px-5 py-2 rounded-sm text-center">
                Add to Wishlist
              </p>
              <p className="w-[48%] bg-[#C00A27] text-white px-5 py-2 rounded-sm text-center">
                Add to Cart
              </p>
            </div>
            <div className="flex justify-center">
              <p className="w-full bg-[#C00A27] text-white px-5 py-2 rounded-sm text-center">
                Purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

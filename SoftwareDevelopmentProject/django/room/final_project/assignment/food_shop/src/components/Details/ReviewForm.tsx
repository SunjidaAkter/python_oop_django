import { useState } from "react";
import StarRating from "./StarRating";

const ReviewForm = () => {
  const [currentValue, setCurrentValue] = useState(0);
  return (
    <div className="w-[50%] mx-auto flex-col justify-normal items-center">
      <p className="text-[36px] font-bold text-[#686464] mb-5 text-center mt-10">
        Give Your Review And Ratings
      </p>
      <p className="text-[16px] font-bold text-[#686464] mb-5 text-center">
        Give Ratings
      </p>
      <StarRating
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered rounded-sm w-full block my-10"
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered rounded-sm w-full block"
      />
      <div className="flex justify-center">
        <p className="w-1/3 my-10 font-bold bg-[#C00A27] text-white px-5 py-2 rounded-sm text-center">
          Review
        </p>
      </div>
    </div>
  );
};

export default ReviewForm;

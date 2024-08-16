import { GoPerson } from "react-icons/go";
import StarRatings from "react-star-ratings";
const Reviews = () => {
  return (
    <div className="w-[70%] mx-auto mt-10">
      <p className="text-[36px] font-semibold text-[#686464] mb-5 text-center">
        Most Recent Reviews
      </p>
      <div className="my-5  p-10">
        <StarRatings
          rating={4}
          starRatedColor="#FFBA5A"
          starDimension="25px"
          starEmptyColor="#a9a9a9"
          starSpacing="3px"
          numberOfStars={5}
          name="rating"
        />
        <div className="flex justify-between my-2 items-center">
          <div className="flex justify-start items-center">
            <GoPerson
              className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-5 "
              size={40}
            />
            <p className="text-[#686464] font-semibold text-[20px]">Username</p>
          </div>
          <p className="text-[#686464] text-[15px] font-bold">3/4/24</p>
        </div>
        <p className="text-[#686464] font-extrabold text-[15px]">title</p>
        <p className="text-[#686464] font-medium text-[15px]">
          Very good⭐🧾😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
        </p>
      </div>
      <div className="my-5  p-10">
        <StarRatings
          rating={4}
          starRatedColor="#FFBA5A"
          starDimension="25px"
          starEmptyColor="#a9a9a9"
          starSpacing="3px"
          numberOfStars={5}
          name="rating"
        />
        <div className="flex justify-between my-2 items-center">
          <div className="flex justify-start items-center">
            <GoPerson
              className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-5 "
              size={40}
            />
            <p className="text-[#686464] font-semibold text-[20px]">Username</p>
          </div>
          <p className="text-[#686464] text-[15px] font-bold">3/4/24</p>
        </div>
        <p className="text-[#686464] font-extrabold text-[15px]">title</p>
        <p className="text-[#686464] font-medium text-[15px]">
          Very good⭐🧾😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
        </p>
      </div>
      <div className="my-5  p-10">
        <StarRatings
          rating={4}
          starRatedColor="#FFBA5A"
          starDimension="25px"
          starEmptyColor="#a9a9a9"
          starSpacing="3px"
          numberOfStars={5}
          name="rating"
        />
        <div className="flex justify-between my-2 items-center">
          <div className="flex justify-start items-center">
            <GoPerson
              className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-5 "
              size={40}
            />
            <p className="text-[#686464] font-semibold text-[20px]">Username</p>
          </div>
          <p className="text-[#686464] text-[15px] font-bold">3/4/24</p>
        </div>
        <p className="text-[#686464] font-extrabold text-[15px]">title</p>
        <p className="text-[#686464] font-medium text-[15px]">
          Very good⭐🧾😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
        </p>
      </div>
    </div>
  );
};

export default Reviews;

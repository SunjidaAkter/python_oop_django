import { GoPerson } from "react-icons/go";
import StarRatings from "react-star-ratings";
import { useGetReviewsQuery } from "../../redux/features/food/foodApi";
import { useParams } from "react-router-dom";
import { IReview } from "../../types/globalType";

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};

const Reviews = () => {
  const { id } = useParams();
  const {
    data: reviewData,
    isLoading: reviewLoading,
    error: reviewError,
  } = useGetReviewsQuery(id);

  const categorise = () => {
    if (reviewLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (reviewError) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong😓!
          </p>
        </div>
      );
    } else if (!reviewLoading && reviewData?.length === 0) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            No Reviews Available!
          </p>
        </div>
      );
    } else {
      return (
        <>
          {reviewData?.map((review: IReview) => (
            <div className="my-5 p-5 md:p-10">
              <StarRatings
                rating={review?.rating}
                starRatedColor="#FFBA5A"
                starDimension="20px"
                starEmptyColor="#a9a9a9"
                starSpacing="3px"
                numberOfStars={5}
                name="rating"
              />
              <div className="flex flex-col md:flex-row justify-between my-2 items-center">
                <div className="flex justify-start items-center mb-2 md:mb-0">
                  <GoPerson
                    className="bg-[#8d8b8b] p-1 rounded-sm text-yellow-400 mr-3 md:mr-5 
                      text-[30px] md:text-[40px]" // Responsive size using Tailwind
                  />
                  <p className="text-[#686464] font-semibold text-[16px] md:text-[20px]">
                    {review?.reviewer?.username}
                  </p>
                </div>
                <p className="text-[#686464] text-[12px] md:text-[15px] font-bold">
                  {formatDate(review?.created)}
                </p>
              </div>
              <p className="text-[#686464] font-extrabold text-[14px] md:text-[15px]">
                {review.title}
              </p>
              <p className="text-[#686464] font-medium text-[14px] md:text-[15px]">
                {review.body}
              </p>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <div className="w-[90%] md:w-[70%] mx-auto mt-10">
      <p className="text-[28px] md:text-[36px] font-semibold text-[#686464] mb-5 text-center">
        Most Recent Reviews
      </p>
      {categorise()}
    </div>
  );
};

export default Reviews;

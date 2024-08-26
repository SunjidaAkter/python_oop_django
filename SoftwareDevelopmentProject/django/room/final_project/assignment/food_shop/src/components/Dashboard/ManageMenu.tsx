import {
  useDeleteMenuMutation,
  useGetMenuListQuery,
} from "../../redux/features/food/foodApi";
import { IFood } from "../../types/globalType";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const ManageMenu = () => {
  const [deleteMenu] = useDeleteMenuMutation();

  const {
    data: filteredMenu,
    isLoading,
    error,
  } = useGetMenuListQuery(undefined);
  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#900A27",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed the deletion
        // const options = {
        //   id: id,
        // };
        deleteMenu(id);
        // navigate("/all-books");
        Swal.fire({
          title: "Cart Item Deleted Successfully!",
          icon: "success",
          confirmButtonText: "Cool!",
          confirmButtonColor: "#900A27",
        });
      }
    });
  };

  const categorise = () => {
    if (isLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (error) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else if (!isLoading && filteredMenu?.length == 0) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            No Menu Item Is Available In This Category!!
          </p>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMenu?.map((menu: IFood) => (
            <div
              key={menu.id}
              className="group card bg-base-100 shadow-xl rounded-none border-2 border-[#f9f9f9]"
            >
              <figure>
                <img src={menu?.image} alt={menu?.title} />
              </figure>
              <div className="p-[32px] bg-[#f9f9f9]">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[20px] text-[#900A27] mb-3">
                    {menu?.title}
                  </p>
                  <p className="badge badge-outline text-[#900A27] border-2 font-semibold mb-3">
                    {menu?.category === 1
                      ? "Breakfast"
                      : menu?.category === 2
                      ? "Lunch"
                      : "Dinner"}
                  </p>
                </div>
                <p>
                  {menu?.description.split(" ").slice(0, 10).join(" ") +
                    (menu?.description.split(" ").length > 10 ? "..." : "")}
                </p>
                <div className="flex justify-between items-center">
                  <StarRatings
                    rating={menu?.rating}
                    starRatedColor="#FFBA5A"
                    starDimension="20px"
                    starEmptyColor="#a9a9a9"
                    starSpacing="2px"
                    numberOfStars={5}
                    name="rating"
                  />
                  <p className="text-[15px] font-semibold text-[#7d7d7d] my-5">
                    {menu?.review_count} review
                    {menu?.review_count !== 1 && menu.review_count !== 0
                      ? "s"
                      : ""}
                  </p>
                </div>
                <div className="card-actions justify-center">
                  <div className="bg-[#900A27] w-4 h-4 rotate-45 mb-[-18px]"></div>
                  <div className="bg-[#bcbaba] transition-all group-hover:bg-[#900A27] w-full h-[1px]"></div>
                </div>
                <div className="flex justify-center">
                  <p className="text-[20px] font-semibold text-[#7d7d7d] mt-5">
                    ${menu?.price}
                  </p>
                </div>
                <div className="flex justify-center">
                  <p
                    onClick={() => handleDelete(menu?.id)}
                    className="btn btn-error mt-5 py-2"
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <p className="mt-10 mb-6 text-center text-[#3a3a3a] text-[30px] font-bold">
        Our Products
      </p>
      <div className="flex justify-center">
        <p className="text-center font-semibold mb-24 w-[50%]">
          Quam pellentesque nec nam aliquam sem et tortor consequat. Ut placerat
          orci nulla pellentesque dignissim enim sit amet venenatis.
        </p>
      </div>
      {categorise()}
    </div>
  );
};

export default ManageMenu;

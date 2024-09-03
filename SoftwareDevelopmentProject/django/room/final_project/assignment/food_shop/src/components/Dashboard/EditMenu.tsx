import { FormEvent } from "react";
// import Swal from "sweetalert2";
import spoons from "../../assets/pngwing.com.png";
import shwarma from "../../assets/pngwing.com (2).png";
import {
  useGetCuisineQuery,
  useSingleMenuQuery,
} from "../../redux/features/food/foodApi";
import { useParams } from "react-router-dom";
import { ICuisine } from "../../types/globalType";
import Swal from "sweetalert2";
// import { useGetCuisineQuery } from "../../redux/features/food/foodApi";
// import { ICuisine, IFood } from "../../types/globalType";
// window.location.reload();
const handleEditMenu = (formEvent: FormEvent<HTMLFormElement>, id: number) => {
  formEvent.preventDefault();

  const getValue = (id: string): string =>
    (document.getElementById(id) as HTMLInputElement).value;

  const getFile = (id: string): File | null =>
    (document.getElementById(id) as HTMLInputElement).files?.[0] || null;

  const getSelectedValues = (id: string): number[] => {
    const selectElement = document.getElementById(id) as HTMLSelectElement;
    return Array.from(selectElement.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );
  };

  const title = getValue("title");
  const description = getValue("description");
  const price = getValue("price");
  const category = getValue("category");
  const cuisines = getSelectedValues("cuisine");
  const image = getFile("image");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("category", category);
  cuisines.forEach((cuisine) => formData.append("cuisine", cuisine.toString()));

  if (image) {
    formData.append("image", image);
  }

  fetch(`https://food-shop-server.onrender.com/menu/list/${id}/`, {
    method: "PUT",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Swal.fire({
        text: "Menu item edited successfully.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#C00A27",
      });
    })
    .catch((error) => {
      console.error("Error editing menu item:", error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#C00A27",
      });
    });
};

const EditMenu = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: menuItem,
    isLoading: userLoading,
    isError: userError,
    // error,
  } = useSingleMenuQuery(id);
  const { data: cuisineData } = useGetCuisineQuery(undefined);
  console.log(menuItem?.image);
  const categorise = () => {
    if (userLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (userError) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong!!
          </p>
        </div>
      );
    } else {
      return (
        <form
          onSubmit={(formEvent) => handleEditMenu(formEvent, Number(id))}
          // onSubmit={(event) => handleEditMenu(event, id)}
          className="mx-auto w-full md:w-[85%] lg:w-[80%] bg-white mb-10 mt-10 bg-opacity-85 shadow-2xl rounded-lg"
        >
          <div className="px-10 md:px-20 lg:px-28 py-14">
            <p className="mb-5 text-center text-[#3a3a3a] text-[24px] md:text-[30px] font-bold">
              Edit Menu Item
            </p>
            <label className="form-control w-full my-3 md:my-5">
              <input
                required
                type="text"
                placeholder="Title"
                id="title"
                className="input input-bordered w-full"
                defaultValue={menuItem?.title}
              />
            </label>
            <div className="flex justify-between items-center">
              <label className="form-control w-[47%] my-3 md:my-5">
                <textarea
                  required
                  placeholder="Description"
                  id="description"
                  className="textarea textarea-bordered w-full"
                  defaultValue={menuItem?.description}
                />
              </label>

              <label className="form-control w-[47%] my-3 md:my-5">
                <select
                  id="cuisine"
                  multiple
                  className="select select-bordered"
                >
                  {cuisineData?.map((cuisine: ICuisine) => {
                    const isSelected = menuItem?.cuisine?.find(
                      (csn: number) => {
                        return csn === cuisine?.id;
                      }
                    );
                    return (
                      <option
                        key={cuisine?.id}
                        value={cuisine?.id}
                        selected={isSelected}
                      >
                        {cuisine?.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  required
                  type="number"
                  placeholder="Price"
                  id="price"
                  className="input input-bordered w-full"
                  defaultValue={menuItem?.price}
                />
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="number"
                  placeholder="Discount percentage"
                  id="discount"
                  className="input input-bordered w-full"
                  defaultValue={menuItem?.discount}
                />
              </label>
            </div>
            <div className="flex justify-between items-center">
              <label className="form-control w-[47%] my-3 md:my-5">
                <select
                  id="category"
                  className="select select-bordered"
                  defaultValue={menuItem?.category}
                >
                  <option disabled>Category</option>
                  <option value="1">Breakfast</option>
                  <option value="2">Lunch</option>
                  <option value="3">Dinner</option>
                </select>
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="file"
                  placeholder="Image Files"
                  id="image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#C00A27] text-white text-[15px] font-semibold rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      );
    }
  };
  return (
    <div className="w-full h-full bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920)] bg-no-repeat bg-contain relative">
      <div className="relative">
        {categorise()}
        <div className="absolute top-0 right-0 w-[30%] md:w-[25%] lg:w-[30%] -z-10">
          <img src={spoons} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 w-[30%] md:w-[25%] lg:w-[30%] -z-10">
          <img src={shwarma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EditMenu;

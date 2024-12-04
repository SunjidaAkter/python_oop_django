import { FormEvent } from "react";
import Swal from "sweetalert2";
import { useGetAuthorListQuery, useGetGenreQuery } from "../redux/features/api";
import { IAuthor, IGenre } from "../types/globalTypes";

const AddBook = () => {
  const handleAddBook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const getValue = (id: string): string =>
      (document.getElementById(id) as HTMLInputElement).value;

    // const getFile = (id: string): File | null =>
    //   (document.getElementById(id) as HTMLInputElement).files?.[0] || null;
    // const getSelectedValues = (id: string): number[] => {
    //   const selectElement = document.getElementById(id) as HTMLSelectElement;
    //   return Array.from(selectElement.selectedOptions, (option) =>
    //     parseInt(option.value, 10)
    //   );
    // };
    const title = getValue("title");
    const image = getValue("image");
    const description = getValue("description");
    const price = getValue("price");
    const quantity = getValue("quantity");
    const genre = getValue("genre");
    const author = getValue("author");
    const isbn = getValue("isbn");
    // const image = getFile("image");
    // const cuisines = getSelectedValues("cuisine");
    // console.log("Selected cuisines:", cuisines);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("genre", genre);
    formData.append("author", author);
    formData.append("quantity", quantity);
    formData.append("isbn", isbn);
    // cuisines.forEach((cuisine) =>
    //   formData.append("cuisine", cuisine.toString())
    // );
    // if (image) {
    //   formData.append("image", image);
    // }

    fetch("https://library-management-server-tp1n.vercel.app/book/list/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .then(({ status, data }) => {
        if (status === 201) {
          // Success
          Swal.fire({
            text: "Book added successfully.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#C00A27",
          }).then(() => {
            // Clear form fields manually
            (document.getElementById("title") as HTMLInputElement).value = "";
            (document.getElementById("isbn") as HTMLInputElement).value = "";
            (
              document.getElementById("description") as HTMLTextAreaElement
            ).value = "";
            (document.getElementById("price") as HTMLInputElement).value = "";
            (document.getElementById("quantity") as HTMLInputElement).value =
              "";
            (
              document.getElementById("genre") as HTMLSelectElement
            ).selectedIndex = 0;
            (
              document.getElementById("author") as HTMLSelectElement
            ).selectedIndex = 0;
            (document.getElementById("image") as HTMLInputElement).value = "";
          });
        } else {
          // Error (e.g., duplicate ISBN)
          console.log(data);
          Swal.fire({
            title: "Error!",
            text: data?.message || "Please Provide a unique ISBN number!!",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "[#4c453c]",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding book item:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the book.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "[#4c453c]",
        });
      });
  };
  const { data: genreData } = useGetGenreQuery(undefined);
  const { data: authorData } = useGetAuthorListQuery(undefined);
  return (
    <div className="w-full ">
      <div className="mx-10 py-3 px-4 bg-white rounded-xl shadow-md">
        <h1 className="font-bold caveat lg:text-[50px] text-[25px] text-center pb-5 pt-2 text-[#4c453c]">
          Add Book
        </h1>
        <hr />
        <form
          onSubmit={handleAddBook}
          //   className="mx-auto w-full md:w-[85%] lg:w-[80%] mb-10 mt-10 bg-opacity-85 shadow-2xl rounded-lg"
        >
          <div className="px-10 md:px-20 lg:px-28 lg:py-7 pb-4 pt-0">
            {/* <p className="mb-5 text-center text-[#3a3a3a] text-[24px] md:text-[30px] font-bold">
              Add Menu Item
            </p> */}
            <label className="form-control w-full my-3 md:my-5">
              <input
                required
                type="text"
                placeholder="Title"
                id="title"
                className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <textarea
                required
                placeholder="Description"
                id="description"
                className="textarea textarea-bordered w-full  border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
              />
            </label>
            <div className="flex justify-between items-center">
              <label className="form-control w-[47%] my-3 md:my-5">
                <select
                  id="genre"
                  //   multiple
                  className="select select-bordered  border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                >
                  <option disabled selected>
                    Genre
                  </option>
                  {genreData?.map((cuisine: IGenre) => {
                    return (
                      <option key={cuisine?.id} value={cuisine?.id}>
                        {cuisine?.name || "Loading..."}
                      </option>
                    );
                  })}
                  {/* <option value={1}>name</option> */}
                </select>
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <select
                  id="author"
                  className="select select-bordered  border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                >
                  <option disabled selected>
                    Author
                  </option>

                  {authorData?.map((cuisine: IAuthor) => {
                    return (
                      <option key={cuisine?.id} value={cuisine?.id}>
                        {cuisine?.name || "Loading..."}
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
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                />
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="number"
                  placeholder="Quantity"
                  id="quantity"
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                />
              </label>
            </div>
            <div className="flex justify-between items-center">
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="url"
                  placeholder="Image URL"
                  id="image"
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                />
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="text"
                  placeholder="ISBN"
                  id="isbn"
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#4c453c] text-white caveat text-[25px] uppercase rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        {/* {categoriseTable()} */}
      </div>
    </div>
  );
};

export default AddBook;

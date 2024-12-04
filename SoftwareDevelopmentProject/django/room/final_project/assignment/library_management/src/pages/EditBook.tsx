import { FormEvent } from "react";
import Swal from "sweetalert2";
import {
  useGetAuthorListQuery,
  useGetGenreQuery,
  useSingleBookQuery,
} from "../redux/features/api";
import { useParams } from "react-router-dom";
import { IAuthor, IGenre } from "../types/globalTypes";

const EditBook = () => {
  const handleEditBook = (
    formEvent: FormEvent<HTMLFormElement>,
    id: number
  ) => {
    formEvent.preventDefault();

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
    const isbn = getValue("isbn");
    const image = getValue("image");
    const description = getValue("description");
    const price = getValue("price");
    const quantity = getValue("quantity");
    const genre = getValue("genre");
    const author = getValue("author");
    // const cuisines = getSelectedValues("cuisine");
    // const image = getFile("image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("isbn", isbn);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("genre", genre);
    formData.append("author", author);
    console.log([...formData.entries()]);
    // cuisines.forEach((cuisine) => formData.append("cuisine", cuisine.toString()));

    fetch(
      `https://library-management-server-tp1n.vercel.app/book/list/${id}/`,
      {
        method: "PUT",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          text: "Book item edited successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "[#4c453c]",
        });
      })
      .catch((error) => {
        console.error("Error editing menu item:", error);
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "[#4c453c]",
        });
      });
  };

  // const handleAddBook = (FormEvent: FormEvent<HTMLFormElement>, id: number) => {
  //   FormEvent.preventDefault();

  //   const getValue = (id: string): string =>
  //     (document.getElementById(id) as HTMLInputElement).value;

  //   // const getFile = (id: string): File | null =>
  //   //   (document.getElementById(id) as HTMLInputElement).files?.[0] || null;
  //   // const getSelectedValues = (id: string): number[] => {
  //   //   const selectElement = document.getElementById(id) as HTMLSelectElement;
  //   //   return Array.from(selectElement.selectedOptions, (option) =>
  //   //     parseInt(option.value, 10)
  //   //   );
  //   // };
  //   const title = getValue("title");
  //   const image = getValue("image");
  //   const description = getValue("description");
  //   const price = getValue("price");
  //   const quantity = getValue("quantity");
  //   const genre = parseInt(getValue("genre"), 10); // Convert to number
  //   const author = parseInt(getValue("author"), 10); // Convert to number
  //   const isbn = getValue("isbn");

  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("price", price);
  //   formData.append("quantity", quantity);
  //   formData.append("genre", genre.toString()); // Append as string if necessary
  //   formData.append("author", author.toString()); // Append as string if necessary
  //   formData.append("image", image);
  //   formData.append("isbn", isbn);
  //   // cuisines.forEach((cuisine) =>
  //   //   formData.append("cuisine", cuisine.toString())
  //   // );
  //   // if (image) {
  //   //   formData.append("image", image);
  //   // }

  //   fetch(
  //     `https://library-management-server-tp1n.vercel.app/book/list/${id}/`,
  //     {
  //       method: "PUT",
  //       body: formData,
  //     }
  //   )
  //     .then((res) => res.json().then((data) => ({ status: res.status, data })))
  //     .then(({ status, data }) => {
  //       if (status === 201) {
  //         // Success
  //         Swal.fire({
  //           text: "Book edited successfully.",
  //           icon: "success",
  //           confirmButtonText: "OK",
  //           confirmButtonColor: "[#4c453c]",
  //         }).then(() => {
  //           // Clear form fields manually
  //           (document.getElementById("title") as HTMLInputElement).value = "";
  //           (document.getElementById("isbn") as HTMLInputElement).value = "";
  //           (
  //             document.getElementById("description") as HTMLTextAreaElement
  //           ).value = "";
  //           (document.getElementById("price") as HTMLInputElement).value = "";
  //           (document.getElementById("quantity") as HTMLInputElement).value =
  //             "";
  //           (
  //             document.getElementById("genre") as HTMLSelectElement
  //           ).selectedIndex = 0;
  //           (
  //             document.getElementById("author") as HTMLSelectElement
  //           ).selectedIndex = 0;
  //           (document.getElementById("image") as HTMLInputElement).value = "";
  //         });
  //       } else {
  //         console.log(data);
  //         // Error (e.g., duplicate ISBN)
  //         Swal.fire({
  //           title: "Error!",
  //           text: data?.message || "Please Provide a unique ISBN number!!",
  //           icon: "error",
  //           confirmButtonText: "OK",
  //           confirmButtonColor: "[#4c453c]",
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.error("Error adding book item:", error);
  //       Swal.fire({
  //         title: "Error!",
  //         text: "An error occurred while adding the book.",
  //         icon: "error",
  //         confirmButtonText: "OK",
  //         confirmButtonColor: "[#4c453c]",
  //       });
  //     });
  // };
  const { data: genreData } = useGetGenreQuery(undefined);
  const { data: authorData } = useGetAuthorListQuery(undefined);
  const { id } = useParams();
  console.log(id);
  const {
    data: bookItem,
    // isLoading: bookLoading,
    // isError: bookError,
    // error,
  } = useSingleBookQuery(id);
  const genreName = genreData?.find((genre: IGenre) => {
    return genre?.id === bookItem?.genre;
  })?.name;
  const authorName = authorData?.find((author: IAuthor) => {
    return author?.id === bookItem?.author;
  })?.name;
  console.log(authorData);
  return (
    <div className="w-full">
      <div className="m-10 py-3 px-4 bg-white rounded-xl shadow-md">
        <h1 className="font-bold caveat text-[50px] text-center pb-5 pt-2 text-[#4c453c]">
          Edit Book
        </h1>
        <hr />
        <form
          onSubmit={(formEvent) =>
            handleEditBook(formEvent, Number(bookItem?.id))
          }
          //   className="mx-auto w-full md:w-[85%] lg:w-[80%] mb-10 mt-10 bg-opacity-85 shadow-2xl rounded-lg"
        >
          <div className="px-10 md:px-20 lg:px-28 py-14">
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
                defaultValue={bookItem?.title}
              />
            </label>
            <label className="form-control w-full my-3 md:my-5">
              <textarea
                required
                placeholder="Description"
                id="description"
                className="textarea textarea-bordered w-full  border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                defaultValue={bookItem?.description}
              />
            </label>
            <div className="flex justify-between items-center">
              <label className="form-control w-[47%] my-3 md:my-5">
                <select
                  id="genre"
                  //   multiple
                  className="select select-bordered  border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                  defaultValue={bookItem?.genre}
                >
                  <option disabled>{genreName}</option>
                  {genreData?.map((cuisine: IGenre) => {
                    return (
                      <option key={cuisine?.id} value={cuisine?.id}>
                        {cuisine?.name}
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
                  defaultValue={bookItem?.author}
                >
                  <option disabled>{authorName}</option>

                  {authorData?.map((cuisine: IAuthor) => {
                    return (
                      <option key={cuisine?.id} value={cuisine?.id}>
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
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                  defaultValue={bookItem?.price}
                />
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="number"
                  placeholder="Quantity"
                  id="quantity"
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                  defaultValue={bookItem?.quantity}
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
                  defaultValue={bookItem?.image}
                />
              </label>
              <label className="form-control w-[47%] my-3 md:my-5">
                <input
                  type="text"
                  placeholder="ISBN"
                  id="isbn"
                  className="input input-bordered w-full border-dashed border-b-[2px] border-[[#4c453c]] bg-white border-x-0 focus:border-0 border-t-0"
                  defaultValue={bookItem?.isbn}
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#4c453c] text-white caveat text-[25px] uppercase rounded-md"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
        {/* {categoriseTable()} */}
      </div>
    </div>
  );
};

export default EditBook;

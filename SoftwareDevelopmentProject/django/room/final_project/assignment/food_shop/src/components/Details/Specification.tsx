import { useParams } from "react-router-dom";
import {
  // useGetCuisineQuery,
  useSingleMenuQuery,
} from "../../redux/features/food/foodApi";
// import { ICuisine } from "../../types/globalType";

const Specification = () => {
  const { id } = useParams();
  const {
    data: menu,
    isLoading: isLoadingMenu,
    error: errorMenu,
  } = useSingleMenuQuery(id);
  // const { data: cuisineData } = useGetCuisineQuery(undefined);
  if (isLoadingMenu) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  } else if (errorMenu) {
    return (
      <div className="my-[100px] flex flex-col justify-center items-center">
        <img
          src="https://ph-tube.netlify.app/images/Icon.png"
          alt=""
          className="mb-5"
        />
        <p className="text-red-500 text-lg text-center font-extrabold">
          Something Went Wrong!
        </p>
      </div>
    );
  } else {
    return (
      <div className="w-full mx-auto px-4 py-6 md:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="lg:w-[50%] w-full">
          <p className="text-xl font-bold">Details :</p>
          <p>
            {menu?.description}
            {/* {menu?.description} */}
          </p>
          <div className="overflow-x-auto mt-5">
            <p className="text-xl font-bold mb-2 lg:mt-0">Recipe :</p>
            <table className="table">
              {/* head */}

              <tbody>
                <tr>
                  <th className="pl-0 align-top">Ingredients</th>
                  <td>
                    Eggs (scrambled, fried, or poached), Sausages (pork or
                    vegetarian option), Bacon, Grilled tomatoes, Baked beans,
                    Toast or fried bread, Mushrooms, Black pudding (optional),
                    Hash browns or fried potatoes.
                  </td>
                </tr>
                <tr className="hover">
                  <th className="pl-0 align-top">Preparation Method</th>
                  <td>
                    Grilled, fried, and baked ingredients. Eggs can be prepared
                    according to preference.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-[40%] w-full">
          <p className="text-xl font-bold mt-5 mb-2 lg:mt-0">
            Allergen Information :
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
            {[
              "Contains eggs, gluten (bread), and possibly dairy (if butter is used).",
              "Meat options may contain soy or other additives.",
              "Vegetarian options available upon request.",
            ]?.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="text-xl font-bold mt-5 mb-2">
            Nutritional Information (per serving):
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
            <li>
              <span className="font-bold">Calories:</span> ~800 kcal
            </li>
            <li>
              <span className="font-bold">Protein:</span> 35g
            </li>
            <li>
              <span className="font-bold">Fats:</span> 55g
            </li>
            <li>
              <span className="font-bold">Carbohydrates:</span> 50g
            </li>
            <li>
              <span className="font-bold">Fiber:</span> 10g
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Specification;

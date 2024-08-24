import { useParams } from "react-router-dom";
import {
  useDeleteCartMutation,
  useGetCartQuery,
  useGetMenuListQuery,
} from "../redux/features/food/foodApi";
import { ICart, IFood, IOrder } from "../types/globalType";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    data: menuList,
    // isLoading: userLoading,
    // error: userError,
  } = useGetMenuListQuery(undefined);
  console.log(menuList);

  const { id } = useParams();
  const {
    data: orderData,
    isLoading: orderLoading,
    error: orderError,
  } = useGetCartQuery(id);
  const [deleteCart] = useDeleteCartMutation();
  let total = 0;
  orderData?.map((order: IOrder) => {
    total += order?.cost;
  });
  console.log(total);
  const handleDelete = (cartId: number) => {
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
        deleteCart(cartId);
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
    if (orderLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    } else if (orderError) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            Something Went Wrong😓!
          </p>
        </div>
      );
    } else if (!orderLoading && orderData?.length === 0) {
      return (
        <div className="my-[200px]">
          <p className="text-red-500 text-lg text-center font-extrabold">
            No Reviews Available!
          </p>
        </div>
      );
    } else {
      return (
        <div className="my-5">
          <div className="overflow-x-auto">
            <table className="w-[70%] mx-auto table">
              {/* head */}
              <thead>
                <tr>
                  <th>Menu Item</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Details</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {orderData?.map((order: ICart) => (
                  <tr key={order?.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-36 w-36">
                            <img
                              src={
                                menuList?.find(
                                  (men: IFood) => men.id === order.menu
                                )?.image
                              }
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold mb-3 text-[20px]">
                            {menuList?.find(
                              (men: IFood) => men.id === order.menu
                            )?.title || "Loading..."}
                          </div>
                          <div className="text-[16px] opacity-50">
                            $
                            {menuList?.find(
                              (men: IFood) => men.id === order.menu
                            )?.price || "Loading..."}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{order?.quantity}</td>
                    <td>{order?.cost}</td>
                    <th>
                      <button className="badge badge-[#900A27] badge-outline py-2">
                        Detail
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(order?.id)}
                        className="badge badge-error text-white py-2"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <div
        style={{ backgroundPosition: "100% 8%" }}
        className="hero bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1920)] bg-no-repeat bg-cover"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content py-10 flex-col">
          <p className="text-[36px] font-bold text-white text-center">
            Account
          </p>
          <p className="text-[20px] text-white font-semibold text-center">
            Home/Register
          </p>
        </div>
      </div>
      <p className="mt-20 mb-6 text-center text-[#3a3a3a] text-[24px] sm:text-[30px] font-bold">
        Cart
      </p>
      {categorise()}
    </div>
  );
};

export default Cart;

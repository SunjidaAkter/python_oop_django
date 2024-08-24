import Swal from "sweetalert2";
import {
  useGetMenuListQuery,
  useGetOrderListQuery,
  // useGetOrderQuery,
  useGetUserAccountsListQuery,
  useSingleUserQuery,
  useUpdateOrderMutation,
} from "../../redux/features/food/foodApi";
import { IFood, IOrder, IUSER } from "../../types/globalType";

const ManageHistory = () => {
  const [updateOrder] = useUpdateOrderMutation();
  const userId = localStorage.getItem("user_id"); // Check if user is logged in
  const { data: singleUser } = useSingleUserQuery(userId);
  const { data: userAccountsData } = useGetUserAccountsListQuery(undefined);
  const filteredUserAccount = userAccountsData?.find(
    (SingleUserAccount: IUSER) => {
      return SingleUserAccount?.user === singleUser?.username;
    }
  );
  const handleDelivery = (id: number) => {
    const updatedOrder = {
      id: id,
      data: {
        is_paid: true,
      },
    };

    updateOrder(updatedOrder);
    Swal.fire({
      title: "An Email Has Been Sent To Customer!",
      icon: "success",
      confirmButtonText: "Close",
    });
  };
  const {
    data: menuList,
    // isLoading: userLoading,
    // error: userError,
  } = useGetMenuListQuery(undefined);
  console.log(menuList);

  const {
    data: orderData,
    isLoading: orderLoading,
    error: orderError,
  } = useGetOrderListQuery(undefined);

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
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Menu Item</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Customer Name</th>
                  <th>Order Time</th>
                  <th>Delivering Status</th>
                  <th>Paying Status</th>
                  <th>Deliver</th>
                </tr>
              </thead>
              <tbody>
                {orderData?.map((order: IOrder) => (
                  <tr key={order?.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
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
                          <div className="font-bold">
                            {menuList?.find(
                              (men: IFood) => men.id === order.menu
                            )?.title || "Loading..."}
                          </div>
                          <div className="text-sm opacity-50">
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
                    <td>{filteredUserAccount?.user}</td>
                    <td>{order?.created_on}</td>
                    <th>
                      <button className="badge badge-outline py-2">
                        {order?.order_status}
                      </button>
                    </th>
                    <th>
                      <button className="badge badge-outline py-2">
                        {order?.is_paid ? "Paid" : "Unpaid"}
                      </button>
                    </th>
                    <th>
                      <button
                        className={`badge ${
                          order?.order_status === "Delivering"
                            ? "badge-success text-white"
                            : "badge-success badge-outline"
                        } py-2`}
                        disabled={order?.order_status === "Delivering"}
                        onClick={() =>
                          !(order?.order_status === "Delivering") &&
                          handleDelivery(order?.id)
                        }
                      >
                        {order.order_status === "Delivering"
                          ? "Delivered"
                          : "Deliver"}
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
    <div className="w-full h-full bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920)] bg-no-repeat bg-cover flex-col items-center">
      {/* Hero section and Profile UI */}
      <div className="">
        <div className="w-[90%] my-40 md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto rounded-md shadow-2xl flex-col justify-center items-center py-4 px-5 sm:px-10 bg-white">
          <p className="mt-20 mb-6 text-center text-[#3a3a3a] text-[24px] sm:text-[30px] font-bold">
            Order History
          </p>
          {categorise()}
        </div>
      </div>
    </div>
  );
};

export default ManageHistory;

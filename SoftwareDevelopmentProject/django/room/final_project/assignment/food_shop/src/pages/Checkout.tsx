import { useNavigate, useParams } from "react-router-dom";
import {
  useGetMenuListQuery,
  useGetSingleOrderQuery,
  useGetUserAccountsListQuery,
  usePostPaymentMutation,
  useSingleUserQuery,
  useUpdateAccountMutation,
  useUpdateOrderMutation,
} from "../redux/features/food/foodApi";
import { IFood, IUser } from "../types/globalType";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Checkout = () => {
  // const [updateLoading, setUpdateLoading] = useState(false);
  const [postPayment, { isLoading }] = usePostPaymentMutation();
  const [updateOrder] = useUpdateOrderMutation();
  const [updateAccount] = useUpdateAccountMutation(undefined);
  const userID = localStorage.getItem("user_id");
  const getValue = (id: string): string => {
    const element = document.getElementById(id) as HTMLInputElement | null;
    return element ? element.value : "";
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: order,
    isLoading: isLoadingOrder,
    error: errorOrder,
  } = useGetSingleOrderQuery(id);
  const [buttonLabel, setButtonLabel] = useState("Order Placed"); // Default label
  const [selectedMethod, setSelectedMethod] = useState("Cash On Delivery");

  // Update button label and selected method once `order` is loaded or `payment_status` changes
  useEffect(() => {
    if (order?.payment_status === "Pending") {
      setButtonLabel("Cash On Delivery");
      setSelectedMethod("Cash On Delivery");
    } else if (order?.payment_status === "Paid") {
      setButtonLabel("Paid");
    }
  }, [order?.payment_status]);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const method = event.target.value;
    setSelectedMethod(method);

    const label =
      order?.payment_status !== "Pending"
        ? "Paid"
        : method === "Cash On Delivery"
        ? "Order Placed"
        : method;

    setButtonLabel(label);
  };
  const {
    data: user,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useSingleUserQuery(userID);
  console.log(user);
  const {
    data: userList,
    // isLoading: isLoadingUser,
    // error: errorUser,
  } = useGetUserAccountsListQuery(undefined);
  const filteredUser = userList?.find((SingleUser: IUser) => {
    return SingleUser?.user === user?.username;
  });
  const {
    data: menuList,
    isLoading: menuLoading,
    error: menuError,
  } = useGetMenuListQuery(undefined);
  const handlePayment = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const email = getValue("email");
    const address = getValue("address");
    const mobile = getValue("mobile");
    const paymentMethod = getValue("paymentMethod");

    if (paymentMethod === "Pay With Account") {
      if (filteredUser?.amount < order?.total_cost) {
        Swal.fire({
          title: "Insuficient Balance!",
          text: "You don't have enough balance in your account.",
          icon: "error",
          confirmButtonText: "Close",
          confirmButtonColor: "#C00A27",
        });
        return;
      } else {
        const updatedOrder = {
          id: order?.id,
          data: {
            payment_status: "Completed",
          },
        };
        updateOrder(updatedOrder);
        const updatedAccount = {
          id: filteredUser?.id,
          data: {
            amount: filteredUser?.amount - (order?.cost + order?.total_cost),
          },
        };
        updateAccount(updatedAccount);
        Swal.fire({
          title: "Payment Successful!",
          icon: "success",
          confirmButtonText: "Close",
          confirmButtonColor: "#C00A27",
        });
        navigate("/dashboard/history", { replace: true });
      }
    } else if (paymentMethod === "Pay With Online") {
      const options = {
        user_id: filteredUser?.id,
        order_id: id,
        menu_id: menu?.id,
        mobile,
        address,
        email,
      };
      if (!isLoading) {
        try {
          const response = await postPayment(options).unwrap();
          if (response) {
            window.location.href = response?.payment_url;
          }
        } catch (error) {
          Swal.fire({
            title: "Something Went Wrong!",
            icon: "error",
            confirmButtonText: "OK!",
            confirmButtonColor: "#C00A27",
          });
        }

        Swal.fire({
          title: "Payment Successfull!",
          icon: "success",
          confirmButtonText: "OK!",
          confirmButtonColor: "#C00A27",
        });
      }
    }
    // console.log(email, address, mobile, paymentMethod);
  };
  const menu = menuList?.find((men: IFood) => men.id === order.menu);
  if (isLoadingOrder) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  } else if (errorOrder) {
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
      <div className="flex justify-between flex-wrap border-t-2 border-[#f5f5f5]">
        <div className="lg:w-[50%] w-full lg:px-24 px-12 pt-5">
          <form onSubmit={handlePayment}>
            <h1 className="text-2xl font-bold text-center">
              Contact Information
            </h1>
            <div className="label mt-5">
              <span className="label-text text-gray-600 font-bold">
                Give Your Contact Number
              </span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <FaPhoneAlt />
              </svg>
              <input
                type="text"
                className="grow"
                defaultValue={filteredUser?.mobile_no}
                placeholder="Phone Number"
                id="mobile"
              />
            </label>
            <div className="label mt-5">
              <span className="label-text text-gray-600 font-bold">
                Give Your Email
              </span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                defaultValue={user?.email}
                placeholder="Email"
                id="email"
              />
            </label>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <div className="label mt-5">
                  <span className="label-text text-gray-600 font-bold">
                    First Name
                  </span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    defaultValue={user?.first_name}
                    readOnly
                    placeholder="First Name"
                  />
                </label>
              </div>
              <div className="w-[48%]">
                <div className="label mt-5">
                  <span className="label-text text-gray-600 font-bold">
                    Last Name
                  </span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    defaultValue={user?.last_name}
                    placeholder="Last Name"
                    readOnly
                  />
                </label>
              </div>
            </div>
            <h1 className="text-2xl mt-5 font-bold text-center">Delivery</h1>
            <div className="label mt-3">
              <span className="label-text text-gray-600 font-bold">
                Address
              </span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <FaAddressCard />
              </svg>
              <input
                type="text"
                className="grow"
                defaultValue={filteredUser?.address}
                placeholder="Address"
                id="address"
              />
            </label>
            <h1 className="text-2xl mt-5 font-bold text-center">Payment</h1>

            <label className="form-control w-full mb-5">
              <div className="label">
                <span className="label-text">Pick The Payment Method</span>
              </div>
              <select
                className="select select-bordered"
                id="paymentMethod"
                onChange={handlePaymentMethodChange}
              >
                <option selected>Cash On Delivery</option>
                <option>Pay With Account</option>
                <option>Pay With Online</option>
              </select>
            </label>
            <button
              type="submit"
              disabled={
                selectedMethod === "Cash On Delivery" ||
                order?.payment_status !== "Pending"
              }
              className={`${
                selectedMethod === "Cash On Delivery" ||
                order?.payment_status !== "Pending"
                  ? "btn btn-disabled w-full text-lg my-10"
                  : "btn btn-neutral w-full text-white text-lg my-10"
              }`}
            >
              {buttonLabel}
            </button>
          </form>
        </div>
        <div className="lg:w-[50%] w-full bg-[#f5f5f5] px-10 py-16 rounded-none shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Product Cost Detail
          </h1>
          {menuLoading ? (
            <div className="h-screen flex justify-center items-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : menuError ? (
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
          ) : (
            <div>
              <div className="flex flex-col items-center">
                <img
                  src={menu?.image}
                  alt={menu?.title}
                  className="w-48 h-48 rounded-lg mb-4 shadow-md"
                />
                <p className="text-lg font-semibold text-gray-700 mt-2 text-center">
                  {menu?.title} -{" "}
                  <span className="text-[#4CAF50]">${menu?.price}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2 text-center px-4">
                  {menu?.description ||
                    "Delicious food item with fresh ingredients and authentic flavors. A perfect choice for your meal."}
                </p>
                <p className="text-sm text-gray-500 font-extrabold mt-1 italic text-center">
                  Estimated delivery time: 30-40 mins
                </p>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="text-lg text-gray-600 space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Subtotal:</span>
                  <span>${order?.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Delivery Fee:</span>
                  <span>$10</span>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total:</span>
                  <span className="text-[#FF5722]">${order?.total_cost}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};
export default Checkout;

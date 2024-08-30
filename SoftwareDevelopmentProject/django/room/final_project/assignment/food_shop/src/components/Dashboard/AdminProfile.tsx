import {
  //   useGetMenuListQuery,
  //   useGetOrderQuery,
  useGetUserAccountsListQuery,
  useSingleUserQuery,
  useUpdateAccountMutation,
} from "../../redux/features/food/foodApi";
import { IUSER } from "../../types/globalType";
import Swal, { SweetAlertOptions } from "sweetalert2";

const AdminProfile = () => {
  const [updateAccount, { error, isLoading }] =
    useUpdateAccountMutation(undefined);

  //   const {
  //     data: userData,
  //     // isLoading: userLoading,
  //     // error: userError,
  //   } = useSingleUserAccountQuery(id);
  const userId = localStorage.getItem("user_id"); // Check if user is logged in
  const { data: singleUser } = useSingleUserQuery(userId);
  const {
    data: userAccountsData,
    isLoading: userLoading,
    isError: userError,
  } = useGetUserAccountsListQuery(undefined);
  const filteredUserAccount = userAccountsData?.find(
    (SingleUserAccount: IUSER) => {
      return SingleUserAccount?.user === singleUser?.username;
    }
  );

  const handleTransaction = async (type: "deposit" | "withdraw") => {
    const options: SweetAlertOptions = {
      title: `Enter amount to ${type}`,
      input: "number",
      inputAttributes: {
        min: "1",
        step: "1",
        placeholder: "Enter amount",
      },
      showCancelButton: true,
      confirmButtonText: type.charAt(0).toUpperCase() + type.slice(1),
      preConfirm: (amount: string) => {
        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
          return Swal.showValidationMessage(`Please enter a valid amount`);
        }
        return amount;
      },
    };
    const { value: amount } = await Swal.fire(options);
    if (amount) {
      let newAmount = parseFloat(filteredUserAccount?.amount || "0");
      if (type === "deposit") {
        newAmount += parseFloat(amount);
      } else if (type === "withdraw") {
        if (parseFloat(amount) > newAmount) {
          return Swal.fire("Error", "Insufficient funds", "error");
        }
        newAmount -= parseFloat(amount);
      }
      const options = {
        id: filteredUserAccount?.id,
        data: {
          amount: newAmount,
        },
      };

      updateAccount(options);
      if (!error) {
        console.log("Updated Account");
        Swal.fire(
          "Success",
          `Your account has been ${
            type === "deposit" ? "credited" : "debited"
          } with $${amount}. New balance: $${newAmount}.`,
          "success"
        );
      } else if (!isLoading && error) {
        Swal.fire({
          title: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Oops!",
          confirmButtonColor: "#72865a",
        });
      }
    }
  };
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
        <div className="pt-4 w-full flex flex-col md:flex-row justify-between items-center">
          <div>
            <img
              src={filteredUserAccount?.image}
              alt="Profile Picture"
              className="border-[2px] border-[#900A27] w-[150px] h-[150px] sm:w-[155px] sm:h-[155px] object-cover rounded-full mb-5 md:mb-0"
            />
            <p className="text-center text-[#5f5f5f] text-[20px] lg:text-[30px] mt-2 font-bold">
              {filteredUserAccount?.user}
            </p>
          </div>

          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-[#363636] text-[40px] lg:text-[50px] mt-2 font-extrabold">
              ${filteredUserAccount?.amount}
            </p>

            <div
              onClick={() => handleTransaction("deposit")}
              className="font-bold bg-[white] text-black w-[100px] text-[15px] py-2 mt-3 rounded-xl border-[2px] border-[#900A27] text-center cursor-pointer"
            >
              Deposit
            </div>

            <div
              onClick={() => handleTransaction("withdraw")}
              className="font-bold bg-[white] text-black w-[100px] text-[15px] py-2 mt-3 rounded-xl border-[2px] border-[#900A27] text-center cursor-pointer"
            >
              Withdraw
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[18px] sm:text-[20px] text-black my-2">
              <span className="font-semibold">User Name:</span>{" "}
              {filteredUserAccount?.user}
            </p>
            <p className="text-[18px] sm:text-[20px] text-black my-2">
              <span className="font-semibold">Full Name:</span>{" "}
              {singleUser?.first_name} {singleUser?.last_name}
            </p>
            <p className="text-[18px] sm:text-[20px] text-black my-2">
              <span className="font-semibold">Email:</span> {singleUser?.email}
            </p>
            <p className="text-[18px] sm:text-[20px] text-black my-2">
              <span className="font-semibold">Mobile No:</span>{" "}
              {filteredUserAccount?.mobile_no}
            </p>
            <p className="text-[18px] sm:text-[20px] text-black my-2">
              <span className="font-semibold">Address:</span>{" "}
              {filteredUserAccount?.address}
            </p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="w-full h-full bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920)] bg-no-repeat bg-cover flex-col items-center">
      {/* Hero section and Profile UI */}
      <div className="">
        <div className="w-[90%] my-40 md:w-[80%] lg:w-[80%] xl:w-[80%] mx-auto rounded-md shadow-2xl flex-col justify-center items-center py-4 px-5 sm:px-10 bg-white">
          <div className="mb-10 xl:w-[80%] lg:w-[80%] w-full mx-auto flex-col items-center justify-center">
            {categorise()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

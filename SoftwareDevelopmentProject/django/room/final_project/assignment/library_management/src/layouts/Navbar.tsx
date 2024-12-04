import { IoHeartOutline, IoWalletOutline } from "react-icons/io5";
import logo from "../assets/logo2.png";
// import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useGetUserAccountListQuery,
  useGetWishlistQuery,
  usePostTransactionMutation,
  // useGetWishlistQuery,
  useSingleUserQuery,
  // useUpdateAccountMutation,
} from "../redux/features/api";
import { IAccount } from "../types/globalTypes";
import { useEffect, useState } from "react";
import Swal, { SweetAlertOptions } from "sweetalert2";

const Navbar = () => {
  const [postTransaction] = usePostTransactionMutation(undefined);
  // const [updateAccount, { error, isLoading }] =
  //   useUpdateAccountMutation(undefined);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [type, setType] = useState("");
  // const [userImage, setUserImage] = useState(userIcon);
  // const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const userToken = localStorage.getItem("token"); // Check if user is logged in
  const userId = localStorage.getItem("user_id"); // Check if user is logged in
  const navigate = useNavigate();
  const { data: user } = useSingleUserQuery(userId);
  const { data: userList } = useGetUserAccountListQuery(undefined);
  const filteredAccount = userList?.find((SingleUser: IAccount) => {
    return SingleUser?.user === user?.username;
  });
  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };
  // // const { data: cartData } = useGetCartQuery(filteredAccount?.id);
  const { data: wishlistData } = useGetWishlistQuery(filteredAccount?.id);
  useEffect(() => {
    if (filteredAccount?.id && wishlistData?.length > 0) {
      setWishlistLength(wishlistData.length);
    }
  }, [wishlistData, filteredAccount]);

  // useEffect(() => {
  //   if (userId && filteredaccount?.image) {
  //     setUserImage(filteredaccount.image);
  //   }
  // }, [wishlistData, userList, user, userId, filteredaccount]);

  const handleWishlist = () => {
    navigate("/wishlist", { replace: true });
  };
  // const handleMenu = () => {
  //   navigate("/menu", { replace: true });
  // };

  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // };

  const toggleDropdown = (t: string) => {
    setDropdownOpen(!dropdownOpen);
    setType(t);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setDropdownOpen(false);
    Swal.fire({
      title: "Logged out!",
      text: "You have successfully logged out.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#615b51",
      cancelButtonColor: "#615b5161",
      background: "#ffffff",
    });
    setWishlistLength(0);
    // setCartLength(0);
    // setUserImage(userIcon);
  };

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
      confirmButtonColor: "#615b51",
      cancelButtonColor: "#615b5161",
      background: "#ffffff",
      confirmButtonText: type.charAt(0).toUpperCase() + type.slice(1),
      preConfirm: (amount) => {
        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
          return Swal.showValidationMessage(`Please enter a valid amount`);
        }
        return amount;
      },
    };

    const { value: amount } = await Swal.fire(options);
    if (amount) {
      let newAmount = parseFloat(filteredAccount?.amount || "0");

      if (type === "deposit") {
        newAmount += parseFloat(amount);
      } else if (type === "withdraw") {
        if (parseFloat(amount) > newAmount) {
          return Swal.fire("Error", "Insufficient funds", "error");
        }
        newAmount -= parseFloat(amount);
      }

      const transactionOptions = {
        user_id: parseInt(filteredAccount?.id ?? "0"),
        trans_type: type === "deposit" ? "Deposit" : "Withdraw",
        amount: parseFloat(amount),
      };

      console.log("Transaction options:", transactionOptions);

      try {
        const response = await postTransaction(transactionOptions).unwrap();
        if (response) {
          window.location.href = response?.payment_url;
        }

        await Swal.fire({
          title: `${type.charAt(0).toUpperCase() + type.slice(1)} Successful!`,
          text: `Your account has been ${
            type === "deposit" ? "credited" : "debited"
          } with $${amount}.`,
          icon: "success",
          confirmButtonColor: "#615b51",
          cancelButtonColor: "#615b5161",
          background: "#ffffff",
        });
      } catch (error: unknown) {
        console.error("Transaction error:", error);
        Swal.fire({
          title: "Something Went Wrong!",
          text: "Transaction failed. Please try again.",
          icon: "error",
          confirmButtonText: "OK!",
          confirmButtonColor: "#615b51",
          cancelButtonColor: "#615b5161",
          background: "#ffffff",
        });
      }
    }
  };

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 62) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  return (
    <div className="lg:mx-10 lg:my-5 mx-10 mb-5 mt-5  shadow-lg">
      <div className="navbar bg-white lg:px-12 px-5 rounded-lg caveat text-[#4c453c]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[100] mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active my-2" : "my-2 nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active my-2" : "nav-link my-2"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? "nav-link active my-2" : "nav-link my-2"
                  }
                >
                  Books
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-center">
            <img className="lg:w-[30px] w-[15px] mr-1" src={logo} alt="" />
            <NavLink to="/">
              <p className="font-bold lg:text-[30px] text-[15px] text-[#4c453c]">
                BOOKIT
              </p>
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-white z-50">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Books
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {userToken && userId ? (
              <img
                src={filteredAccount?.image_url}
                className="w-[30px] h-[30px] rounded-full"
                alt={filteredAccount?.user}
                onClick={() => toggleDropdown("auth")}
              />
            ) : (
              <HiOutlineUserCircle
                onClick={() => toggleDropdown("auth")}
                className="text-[30px] text-[#4c453c] ml-3"
              />
            )}
            {dropdownOpen && type === "auth" && (
              <div className="absolute right-5 mt-2 w-48 bg-white border rounded-md shadow-lg z-30">
                {userToken && userId ? (
                  <>
                    {filteredAccount?.role === "Admin" ? (
                      <NavLink
                        to={`/dashboard`}
                        className="block px-4 py-2 text-gray-800"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Dashboard
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/profile/${filteredAccount?.id}`}
                        className="block px-4 py-2 text-gray-800"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile
                      </NavLink>
                    )}

                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-gray-800"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-gray-800"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="block px-4 py-2 text-gray-800"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
          <div>
            <IoWalletOutline
              onClick={() => toggleDropdown("money")}
              className="text-[30px] text-[#4c453c] ml-3"
            />
            {dropdownOpen && type === "money" && (
              <div className="absolute right-5 mt-2 w-48 bg-white border rounded-md shadow-lg z-30">
                {userToken && userId ? (
                  <>
                    <NavLink
                      to="#"
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link1 active block px-4 py-2 text-[15px] text-center"
                          : "nav-link1 block px-4 py-2 text-[15px] text-center "
                      }
                      // onClick={() => handleTransaction("Deposit")}
                    >
                      Current Balance : ${" "}
                      {filteredAccount ? filteredAccount?.amount : "0"}
                    </NavLink>
                    <NavLink
                      to="#"
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link1 active block px-4 py-2 text-[15px] hover:underline text-center"
                          : "nav-link1 block px-4 py-2 text-[15px] hover:underline text-center "
                      }
                      // className="block px-4 py-2 text-gray-800"
                      onClick={() => handleTransaction("withdraw")}
                    >
                      Withdraw
                    </NavLink>
                    <NavLink
                      to="#"
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link1 active block px-4 py-2 hover:underline text-[15px] text-center"
                          : "nav-link1 block px-4 py-2 hover:underline text-[15px] text-center "
                      }
                      onClick={() => handleTransaction("deposit")}
                    >
                      Deposit
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="#"
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link1 active block px-4 py-2 text-[15px] text-center"
                          : "nav-link1 block px-4 py-2 text-[15px] text-center "
                      }
                      // onClick={() => handleTransaction("Deposit")}
                    >
                      Current Balance : $0
                    </NavLink>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link1 active block px-4 py-2 text-[15px] text-center"
                          : "nav-link1 block px-4 py-2 text-[15px] text-center "
                      }
                      // onClick={() => handleTransaction("Deposit")}
                    >
                      Login For Deposit
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="indicator" onClick={handleWishlist}>
            <span className="indicator-item bg-white border-[2px] border-[#615b51] text-[#4c453c] px-[7px] text-sm rounded-2xl">
              {wishlistLength || "0"}
            </span>
            <IoHeartOutline className="text-[30px] text-[#4c453c] ml-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

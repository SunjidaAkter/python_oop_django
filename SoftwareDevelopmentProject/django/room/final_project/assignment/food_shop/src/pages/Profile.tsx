const Profile = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundPosition: "100% 8%" }}
        className="hero bg-[url(https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1920)] bg-no-repeat bg-cover "
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
      <p className="text-[36px] font-bold text-[#686464] mb-5 text-center mt-10">
        Profile
      </p>
      <div className="w-[80%] mx-auto bg-[#C00A27] rounded-md shadow-2xl flex justify-between py-20 px-10">
        <div className="w-1/2 flex-col items-start justify-start">
          <div className="w-full flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO-twChKTxu7ZNEYI00dH7nv7nOH-8lOcag&s"
              alt="Profile Picture"
              className="w-[200px] h-[200px] object-cover rounded-full"
            />
          </div>
          <p className="text-[20px] font-semibold text-white mt-5 text-center">
            User Name: John Doe
          </p>
          <p className="text-[20px] text-white mt-5 text-center">
            Email: john.doe@example.com
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-[36px] font-bold text-[white] mb-5 text-center mt-10">
            Order History
          </p>
          <div className="overflow-x-auto">
            <table className="table border-[1px] border-white text-white">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

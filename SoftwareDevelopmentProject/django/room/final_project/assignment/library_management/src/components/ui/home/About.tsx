import CountUp from "react-countup";
import { CgArrowLongRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <div className="sm:m-10 mx-10 mb-10 mt-0 lg:px-32 md:px-20 px-10 md:pt-32 pt-20 pb-0 sm:pb-16 lg:flex lg:flex-row md:flex md:flex-col flex flex-col justify-center items-center bg-white rounded-lg shadow-lg">
      <div className="lg:pl-16 pl-0 w-full md:w-[70%] md:mx-auto mt-[-50px] lg:w-[50%]">
        <div className="flex justify-center">
          <img
            className="lg:w-[200px] md:w-[200px] w-[120px] shadow-[10px_4px_10px_10px_rgba(0,0,0,0.25)] lg:h-[250px] md:h-[250px] h-[170px] mx-4"
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570362374i/38657803.jpg"
            alt=""
          />
          <img
            className="lg:w-[200px] md:w-[200px] w-[120px] shadow-[10px_4px_10px_10px_rgba(0,0,0,0.25)] lg:h-[250px] md:h-[250px] h-[170px] mx-4"
            src="https://m.media-amazon.com/images/I/41avr7bcigL._SY445_SX342_.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center mt-8">
          <img
            className="lg:w-[200px] md:w-[200px] w-[120px] shadow-[10px_4px_10px_10px_rgba(0,0,0,0.25)] lg:h-[250px] md:h-[250px] h-[170px] mx-4"
            src="https://m.media-amazon.com/images/I/51v+Zv5vBiL._SY445_SX342_.jpg"
            alt=""
          />
          <img
            className="lg:w-[200px] md:w-[200px] w-[120px] shadow-[10px_4px_10px_10px_rgba(0,0,0,0.25)] lg:h-[250px] md:h-[250px] h-[170px] mx-4"
            src="https://m.media-amazon.com/images/I/71e2TuWzcyL._AC_UF894,1000_QL80_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:pl-16 pl-0 w-full  lg:mt-[-50px] mt-10 lg:w-[50%]">
        <p className="font-thin lg:text-[60px] md:text-[40px] text-[30px] lilita text-[#4c453c]">
          Find Your Favourite Book Here
        </p>
        <p className="lg:text-[20px] text-[15px] caveat text-[#4c453c] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sed libero dolor, officia laborum quas? Maxime, ratione architecto
          commodi expedita alias officiis aperiam?
        </p>
        <div className="flex justify-between items-center">
          <div className="text-start caveat text-[#4c453c]">
            <p className="text-[30px] lg:text-[45px] font-bold">
              <CountUp end={50} redraw={true}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start} delayedCall>
                    <span
                      ref={countUpRef}
                      // className="text-[#C00A27] font-bold mt-3 text-[29px]"
                    />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </p>
            <p className="lg:text-[20px] text-[15px] font-light">Books</p>
            <p className="lg:text-[20px] text-[15px] font-light">Best Seller</p>
          </div>
          <div className="text-start caveat text-[#4c453c]">
            <p className="text-[30px] lg:text-[45px] font-bold">
              <CountUp end={60} redraw={true}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start} delayedCall>
                    <span
                      ref={countUpRef}
                      // className="text-[#C00A27] font-bold mt-3 text-[29px]"
                    />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </p>
            <p className="lg:text-[20px] text-[15px] font-light">Books</p>
            <p className="lg:text-[20px] text-[15px] font-light">For Coming</p>
          </div>
          <div className="text-start caveat text-[#4c453c]">
            <p className="text-[30px] lg:text-[45px] font-bold">
              <CountUp end={130} redraw={true}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start} delayedCall>
                    <span
                      ref={countUpRef}
                      // className="text-[#C00A27] font-bold mt-3 text-[29px]"
                    />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </p>
            <p className="lg:text-[20px] text-[15px] font-light">Books</p>
            <p className="lg:text-[20px] text-[15px] font-light">Total Books</p>
          </div>
        </div>
        <NavLink to="/books">
          <button className="shadow-[10px_10px_10px_0px_rgba(0,0,0,0.25)] btn btn-md border-[2px] group hover:border-[#8387162] uppercase caveat font-semibold my-12 hover:bg-[#837162]  hover:text-[#fef5e6]  text-[#4c453c] text-[15px]">
            Find Your Favourite
            <CgArrowLongRight className="text-[30px] group-hover:text-[#fef5e6] text-[#4c453c]" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;

import About from "../components/ui/home/About";
import Banner from "../components/ui/home/Banner";
import Booklist from "../components/ui/home/Booklist";
// import Reviews from "../components/ui/home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Booklist />
      <About />
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;

import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import Gallery from "../components/Home/Gallery";
import Latest from "../components/Home/Latest";
import Menu from "../components/Home/Menu";
import Special from "../components/Home/Special";

const Home = () => {
  return (
    <div>
      <Banner />
      <Special />
      <Latest />
      <Category />
      <Gallery />
      <Menu />
    </div>
  );
};

export default Home;

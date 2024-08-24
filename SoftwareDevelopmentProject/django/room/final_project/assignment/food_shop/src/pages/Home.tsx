import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import GalleryComponent from "../components/Home/Gallery";
import Latest from "../components/Home/Latest";
import MenuComonent from "../components/Home/Menu";
import Special from "../components/Home/Special";

const Home = () => {
  return (
    <div>
      <Banner />
      <Special />
      <Latest />
      <Category />
      <GalleryComponent />
      <MenuComonent />
    </div>
  );
};

export default Home;

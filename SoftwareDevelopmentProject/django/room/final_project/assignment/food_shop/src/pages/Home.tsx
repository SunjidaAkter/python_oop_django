import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import DiscountSection from "../components/Home/DiscountSection";
import GalleryComponent from "../components/Home/Gallery";
import Latest from "../components/Home/Latest";
import MenuComonent from "../components/Home/Menu";
import Special from "../components/Home/Special";
import SpecialMenu from "../components/Home/SpecialMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Special />
      <Latest />
      <SpecialMenu />
      <DiscountSection />
      <Category />
      <GalleryComponent />
      <MenuComonent />
    </div>
  );
};

export default Home;

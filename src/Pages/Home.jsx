import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default Home;

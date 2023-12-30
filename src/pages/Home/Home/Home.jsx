import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SwiperGallery from "../SwiperGallery/SwiperGallery";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => (
  <>
    <Helmet>
      <title>Robot || Home</title>
    </Helmet>

    <div>
      <Banner />
      <SwiperGallery></SwiperGallery>
      <Category></Category>
      <Testimonial></Testimonial>
    </div>
  </>
);

export default Home;

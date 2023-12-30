import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryTab from "../Category/CategoryTab";
import Category from "../Category/Category";

const Home = () => (
  <>
    <Helmet>
      <title>Robot || Home</title>
    </Helmet>

    <div>
      <Banner />
      {/* <CategoryTab></CategoryTab> */}
      <Category></Category>
    </div>
  </>
);

export default Home;

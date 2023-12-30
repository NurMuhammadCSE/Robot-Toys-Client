import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => (
  <>
    <Helmet>
      <title>Robot || Home</title>
    </Helmet>

    <div>
      <Banner />
    </div>
  </>
);

export default Home;

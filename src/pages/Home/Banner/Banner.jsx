import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import robot1 from "../../../assets/robot1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="my-10">
      <Carousel showArrows={true}>
        <div className="hero min-h-screen bg-[#EDA4BD] py-16">
          <div className="hero-content flex-col lg:flex-row-reverse items-center">
            <img
              src={robot1}
              className="max-w-sm rounded-lg mx-auto mb-8 lg:mb-0"
              alt="Box Office News Image"
            />
            <div className="text-center text-[#] lg:text-center">
              <h1 className="text-5xl font-bold ">
                EVERYTHING ROBOTICS INFINITE POSSIBILITIES
              </h1>
              <p className="py-6">
                In the crucible of advancement, each line of code is a
                brushstroke on the canvas of tomorrow. We invite you to a world
                where the mundane is forbidden, and every click propels us into
                a future where machines echo the rhythm of human ingenuity.
              </p>
              <AwesomeButton type="primary" size="large">
                Embark on the Journey
              </AwesomeButton>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-[#97847a] py-16">
          <div className="hero-content flex-col lg:flex-row-reverse items-center">
            <div className="text-center text-[#] lg:text-center">
              <h1 className="text-5xl font-bold ">
                Revolutionize Reality: Embark on a Robotic Extravaganza!
              </h1>
              <p className="py-6">
                In the crucible of advancement, each line of code is a
                brushstroke on the canvas of tomorrow. We invite you to a world
                where the mundane is forbidden, and every click propels us into
                a future where machines echo the rhythm of human ingenuity.
              </p>
              <AwesomeButton type="primary" size="large">
                Embark on the Journey
              </AwesomeButton>
            </div>
            <img
              src="https://www.robotshop.com/cdn/shop/products/pyxel-the-coding-pet-img_500x.jpg?v=1697734764"
              className="max-w-sm rounded-lg mx-auto mb-8 lg:mb-0"
              alt="Box Office News Image"
            />
          </div>
        </div>
        <div className="hero min-h-screen bg-[#b9505e] py-16">
          <div className="hero-content flex-col lg:flex-row-reverse items-center">
            <img
              src="https://shorturl.at/dHL06"
              className="max-w-sm rounded-lg mx-auto mb-8 lg:mb-0"
              alt="Box Office News Image"
            />
            <div className="text-center text-[#251d14] lg:text-center">
              <h1 className="text-5xl font-bold ">
                Mechanical Marvels Await: Dive into the Robotic Frontier!
              </h1>
              <p className="py-6">
                Explore a universe where gears interlock with the brilliance of
                ideas. This is not just a journey; it&apos;s a revolution—a
                symphony of innovation where boundaries crumble. Step into a
                space where the extraordinary is not an exception but the norm.
              </p>
              <AwesomeButton>Discover the Future</AwesomeButton>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

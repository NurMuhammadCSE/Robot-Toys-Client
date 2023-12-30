// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/image1.jpg";
import img2 from "../../../assets/image2.jpg";
import img3 from "../../../assets/image3.jpg";
import img4 from "../../../assets/image4.png";
import img5 from "../../../assets/image5.jpg";
import img6 from "../../../assets/image6.jpg";

const SwiperGallery = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperGallery;

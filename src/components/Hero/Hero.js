import Banner from "../Banner/Banner";
import { SwiperWrapper } from "./Hero.styled";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/less/navigation";
import "swiper/css/scrollbar";

const breakpoints = {
  // When window width is >= 320px
  240: {
    slidesPerView: 1,
  },
  // When window width is >= 768px
  768: {
    slidesPerView: 1,
  },
  // When window width is >= 1024px
  1600: {
    slidesPerView: 1,
  },
};

function Hero({ banners }) {
  return (
    <SwiperWrapper>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={1200}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={breakpoints} // Apply breakpoints
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {banners &&
          banners.map((item, index) => (
            <SwiperSlide key={index}>
              <Banner video={item.video} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SwiperWrapper>
  );
}

export default Hero;

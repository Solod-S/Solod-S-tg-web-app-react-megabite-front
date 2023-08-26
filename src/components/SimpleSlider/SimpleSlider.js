import { MenuItem } from "..";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const breakpoints = {
  // When window width is >= 320px
  240: {
    slidesPerView: 1,
  },
  // When window width is >= 768px
  768: {
    slidesPerView: 2,
  },
  // When window width is >= 1024px
  1600: {
    slidesPerView: 3,
  },
};

function SimpleSlider({ sameTypeList, backLinkHref }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={breakpoints} // Apply breakpoints
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {sameTypeList &&
        sameTypeList.map((item) => (
          <SwiperSlide key={item.id}>
            <MenuItem
              itemProps={item}
              location={"own-brand-similar-list"}
              backLinkHref={backLinkHref}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default SimpleSlider;

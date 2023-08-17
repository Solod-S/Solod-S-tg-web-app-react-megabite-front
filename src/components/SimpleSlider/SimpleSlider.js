import { MenuItem } from "../../components";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider({ sameTypeList }) {
  const settings = {
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sameTypeList &&
        sameTypeList.map((item) => (
          <MenuItem key={item.id} itemProps={item} location={"own-brand"} />
        ))}
    </Slider>
  );
}

export default SimpleSlider;

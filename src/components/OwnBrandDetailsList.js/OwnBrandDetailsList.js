import { MenuItem, SimpleSlider } from "../../components";
// import { OwnBrandlsList } from "./OwnBrandDetailsList.styled";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OwnBrandDetailsList({ sameTypeList }) {
  return (
    <section className="portfolioDetailsList">
      <div className="container">
        <h2 className="portfolioDetails-add-list-title">
          Інші товари з цієї категорії
        </h2>

        {/* <OwnBrandlsList> */}
        {/* {sameTypeList.map((item) => (
            <MenuItem key={item.id} itemProps={item} location={"own-brand"} />
          ))} */}
        {/* </OwnBrandlsList> */}
        <div style={{ listStyle: "none" }}>
          <SimpleSlider sameTypeList={sameTypeList} />
        </div>
      </div>
    </section>
  );
}

export default OwnBrandDetailsList;

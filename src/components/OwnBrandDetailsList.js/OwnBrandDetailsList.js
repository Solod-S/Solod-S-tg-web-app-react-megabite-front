import { MenuItem } from "../../components";
import { OwnBrandlsList } from "./OwnBrandDetailsList.styled";

function OwnBrandDetailsList({ sameTypeList }) {
  return (
    <section className="portfolioDetailsList">
      <div className="container">
        <h2 className="portfolioDetails-add-list-title">
          Інші товари з цієї категорії
        </h2>
        <OwnBrandlsList className="portfolio-img-list">
          {sameTypeList.map((item) => (
            <MenuItem key={item.id} itemProps={item} location={"own-brand"} />
          ))}
        </OwnBrandlsList>
      </div>
    </section>
  );
}

export default OwnBrandDetailsList;

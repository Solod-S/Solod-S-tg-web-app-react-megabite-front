import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCatalogBackLinkHref } from "../../redux/app/appSelectors";
import ownbrandData from "../../data/ownbrandData";

import {
  BackBtn,
  OwnBrandDetailsList,
  SectionWrapper,
  ProductItem,
} from "../../components";

function OwnBrandsDetailsPage() {
  const { ownbrandDataId } = useParams();

  const portfolioItem = getPortfolioById(ownbrandDataId);
  const backLinkHref = useSelector(getCatalogBackLinkHref);

  function getPortfolioById(ownbrandDataId) {
    return ownbrandData.find((item) => item.id === ownbrandDataId);
  }

  const sameTypeList = ownbrandData.filter(
    (item) =>
      item.filter === portfolioItem.filter && item.title !== portfolioItem.title
  );

  return (
    <SectionWrapper>
      <BackBtn
        location={backLinkHref ? "/own-brand?" + backLinkHref : "/own-brand"}
      />
      <ProductItem portfolioItem={portfolioItem} />
      {sameTypeList.length > 0 && (
        <OwnBrandDetailsList
          backLinkHref={backLinkHref}
          sameTypeList={sameTypeList
            .sort(() => Math.random() - 0.5)
            .splice(0, 5)}
        />
      )}

      <BackBtn location={backLinkHref} />
    </SectionWrapper>
  );
}

export default OwnBrandsDetailsPage;

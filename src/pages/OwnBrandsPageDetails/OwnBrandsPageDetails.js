import { useParams } from "react-router-dom";
import ownbrandData from "../../data/ownbrandData";

import { BackBtn, OwnBrandDetailsList } from "../../components";
import {
  Main,
  Section,
  Title,
  Info,
  ImgWrapper,
  Image,
  DescriptionWrapper,
} from "./OwnBrandsPageDetails.styled";

function OwnBrandsPageDetails() {
  const { ownbrandDataId } = useParams();
  const portfolioItem = getPortfolioById(ownbrandDataId);

  function getPortfolioById(ownbrandDataId) {
    return ownbrandData.find((item) => item.id === ownbrandDataId);
  }

  const sameTypeList = ownbrandData.filter(
    (item) =>
      item.filter === portfolioItem.filter && item.title !== portfolioItem.title
  );

  return (
    <Main>
      <section className="container">
        <BackBtn location="/own-brand" />
        <Section>
          <Title>{portfolioItem.title}</Title>
          <Info>
            <ImgWrapper>
              <Image src={portfolioItem.imgs[0]} alt={portfolioItem.title} />
            </ImgWrapper>
            <DescriptionWrapper
              dangerouslySetInnerHTML={{
                __html: portfolioItem.description,
              }}
            />
          </Info>
        </Section>
        <OwnBrandDetailsList sameTypeList={sameTypeList} />
        <BackBtn location="/own-brand" />
      </section>
    </Main>
  );
}

export default OwnBrandsPageDetails;

import { useParams, useLocation } from "react-router-dom";
import ownbrandData from "../../data/ownbrandData";

import { BackBtn, OwnBrandDetailsList, ImageSlider } from "../../components";
import {
  Main,
  Section,
  Title,
  Info,
  ImgWrapper,
  BuyBtn,
  // Image,
  DescriptionWrapper,
} from "./OwnBrandsPageDetails.styled";

function OwnBrandsPageDetails() {
  const location = useLocation();
  const { ownbrandDataId } = useParams();

  const portfolioItem = getPortfolioById(ownbrandDataId);
  const backLinkHref = location.state?.from ?? "/own-brand";

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
        <BackBtn location={backLinkHref} />
        <Section>
          <Title>{portfolioItem.title}</Title>

          <Info>
            <ImgWrapper>
              <ImageSlider slides={portfolioItem.imgs} />

              {/* <Image src={portfolioItem.imgs[0]} alt={portfolioItem.title} /> */}
              <BuyBtn
                href={portfolioItem.categoryLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Замовити на сайті
              </BuyBtn>
            </ImgWrapper>
            <DescriptionWrapper
              dangerouslySetInnerHTML={{
                __html: portfolioItem.description,
              }}
            />
          </Info>
        </Section>
        <OwnBrandDetailsList
          backLinkHref={backLinkHref}
          sameTypeList={sameTypeList
            .sort(() => Math.random() - 0.5)
            .splice(0, 5)}
        />
        <BackBtn location={backLinkHref} />
      </section>
    </Main>
  );
}

export default OwnBrandsPageDetails;

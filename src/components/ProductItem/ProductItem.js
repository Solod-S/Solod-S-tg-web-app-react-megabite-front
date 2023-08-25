import { ImageSlider } from "../../components";
import {
  Wrapper,
  Title,
  Info,
  ImgWrapper,
  BuyBtn,
  // Image,
  DescriptionWrapper,
} from "./ProductItem.styled";

const ProductItem = ({ portfolioItem }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ProductItem;

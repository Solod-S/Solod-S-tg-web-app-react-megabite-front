import { ImageSlider } from "../../components";
import {
  Wrapper,
  Title,
  Info,
  ImgWrapper,
  BuyBtn,
  // Image,
  DescriptionWrapper,
  Video,
} from "./ProductItem.styled";

const ProductItem = ({ portfolioItem }) => {
  const { title, imgs, categoryLink, description, video } = portfolioItem;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        <ImgWrapper>
          <ImageSlider slides={imgs} />
          <BuyBtn
            href={categoryLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Замовити на сайті
          </BuyBtn>
        </ImgWrapper>
        <DescriptionWrapper
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {video && (
          <Video
            url={video}
            controls
            width="100%"
            height="100%"
            style={{
              display: "block",
              width: "100%",
              objectFit: "fill",
            }}
          />
        )}
      </Info>
    </Wrapper>
  );
};

export default ProductItem;

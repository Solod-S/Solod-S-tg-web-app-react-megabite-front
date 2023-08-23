import { Wrapper, Title, Description, Image } from "./FeaturesItem.styled";

function FeaturesItem({ image, title, description }) {
  return (
    <>
      <Wrapper>
        {/* <svg width="65.32px" height="70px" aria-label="ATTENTION TO DETAIL">
          <use href={image}></use>
        </svg> */}
        {/* {image} */}
        <Image src={image} alt={title} />
      </Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}

export default FeaturesItem;

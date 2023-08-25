import { Wrapper, Title, Description, Image } from "./FeaturesItem.styled";

function FeaturesItem({ image, title, description }) {
  return (
    <>
      <Wrapper>
        <Image src={image} alt={title} />
      </Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}

export default FeaturesItem;

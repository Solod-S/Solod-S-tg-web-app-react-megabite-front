import {
  BannerWrapper,
  Video,
  // Button, Title
} from "./Banner.styled";

function Banner({ title, url, video }) {
  return (
    <BannerWrapper>
      {/* <Title>
        Дизайн розроблений <br />з нуля
      </Title> */}

      <Video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Video>

      {/* <Button src={url}>Детальніше</Button> */}
    </BannerWrapper>
  );
}
export default Banner;

import {
  BannerWrapper,
  Video,

  // Button, Title
} from "./Banner.styled";

function Banner({ title, url, video, img }) {
  return (
    <BannerWrapper img={img}>
      <Video autoPlay muted loop playsInline preload="auto" autobuffer>
        <source src={video} type="video/mp4" />
      </Video>
      {/* <Video
        style={{
          display: "block",
          width: "100%",
          maxHeight: "750px",
          objectFit: "fill",
        }}
        url={video}
        // playsInline={true}
        controls
        playing
        muted
        loop
        preload="auto"
        width="100%"
      >
        <source src={video} type="video/mp4" />
      </Video> */}
      {/* <Button src={url}>Детальніше</Button> */}

      {/* <Title>
        Дизайн розроблений <br />з нуля
      </Title> */}
    </BannerWrapper>
  );
}
export default Banner;

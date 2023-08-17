import ImageGallery from "react-image-gallery";
import { useRef } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

function ImageSlider({ slides }) {
  const imageGalleryRef = useRef(null);
  const images = slides.map((slide) => ({
    original: slide,
    thumbnail: slide,
  }));

  const onClickHandler = () => {
    imageGalleryRef.current.fullScreen();
    // play(): plays the slides
    // pause(): pauses the slides
    // fullScreen(): activates full screen
    // exitFullScreen(): deactivates full screen
    // slideToIndex(index): slides to a specific index
    // getCurrentIndex(): returns the current index
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        showFullscreenButton={true}
        slideOnThumbnailOver={true}
        showIndex={true}
        slideInterval={3000}
        ref={imageGalleryRef}
        onClick={(e) => {
          onClickHandler();
        }}
      />
    </div>
  );
}

export default ImageSlider;

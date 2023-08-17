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
  };

  return (
    <div className="App">
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        showFullscreenButton={false}
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

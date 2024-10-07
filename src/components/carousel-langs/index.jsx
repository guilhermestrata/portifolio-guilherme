import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from './images';

  const ImageCarousel = () => {

  const settings = {
    infinite: true,       
    speed: 5500,           
    slidesToShow: 7,      
    slidesToScroll: 1,    
    autoplay: true,       
    autoplaySpeed: 0,
    cssEase: "linear",  
    draggable: true,    
    pauseOnHover: false,  
  };

  return (
    <div className="w-full h-56 md:h-56 lg:h-56 mt-6 overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-32 h-32 object-cover`}
            />
          </div>  
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

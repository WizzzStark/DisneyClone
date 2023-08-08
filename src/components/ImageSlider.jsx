import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const images = [
    '/images/slider1.jpg',
    '/images/slider2.jpg',
    '/images/slider3.jpg',
    '/images/slider4.jpg',
    '/images/slider5.jpg',
    '/images/slider6.jpg',
    '/images/slider7.jpg',
    '/images/slider8.jpg',
    '/images/slider9.jpg',
    '/images/slider10.jpg',
    '/images/slider11.jpg',
    '/images/slider12.jpg'
  ];


  const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
  
    return (
      <Slider {...settings} className='slider'>
        {images.map((image, index) => (
          <div key={index} className='sliderCard'>
            <a href='#'>
              <img src={image} alt={`sliderImage-${index}`} />
            </a>
          </div>
        ))}
      </Slider>
    );
  };

export default ImageSlider
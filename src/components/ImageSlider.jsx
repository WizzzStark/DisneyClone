import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const images = [
  { id: 'lQJAJJ2Q9bQCVF1748F4', src: '/images/slider1.jpg' },
  { id: 'ZWE31tDg8Yea74kgtwCx', src: '/images/slider2.jpg' },
  { id: '70LFNzUWZEfqbbyeCvCN', src: '/images/slider3.jpg' },
  { id: 'KDlG2NpWNGde8rs7pLeC', src: '/images/slider4.jpg' },
  { id: 'nBBECVy1GJtxmiSeY5Ml', src: '/images/slider5.jpg' },
  { id: 'adLf5Sledpuj9eU3koAX', src: '/images/slider6.jpg' },
  { id: 'EGidM6sAk8jL9kaEfs1e', src: '/images/slider7.jpg' },
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
            <Link to={'/detail/' + image.id}>
              <img src={image.src} alt={`sliderImage-${index}`} />
            </Link>
          </div>
        ))}
      </Slider>
    );
  };

export default ImageSlider
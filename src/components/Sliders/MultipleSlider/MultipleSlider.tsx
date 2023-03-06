// node_modules
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// styles
import './MultipleSlider.scss';


//images
import one from '../../../images/small caps/1.jpeg';
import two from '../../../images/small caps/2.jpg';
import three from '../../../images/small caps/3.jpg';
import four from '../../../images/small caps/4.jpg';
import five from '../../../images/small caps/5.jpg';
import six from '../../../images/small caps/6.jpg';
import nextArrow from '../../../images/arrow-next.svg';
import prevArrow from '../../../images/arrow-prev.svg';


const MultipleSlider = () => {
  const arrayImg = [one, two, three, four, five, six]
  const settingMultSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipe: false,
    accessibility: false,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    vertical: false,
    nextArrow: (
      <button className='slick-arrow-button'>
        <img src={nextArrow} alt='next-arrow' />
      </button>
    ),
    prevArrow: (
      <button className='slick-arrow-button'>
        <img src={prevArrow} alt='prev-arrow' />
      </button>
    )
  }

  return (
    <>
      <p className='MultipleSlider__info'><span></span><p>Новинки!</p><span></span></p>
      <div className="multiple-slider__wrapper">
        <Slider {...settingMultSlider}>
          {arrayImg.map(img => (
            <>
              <Link to='/caps' className='slider-link'>
                <img key={img} src={img} />
                <span>Шапки</span>
              </Link>
              <p className="slider-price">12378</p>
            </>
          ))}
        </Slider>
      </div>
    </>

  )
}


export { MultipleSlider }
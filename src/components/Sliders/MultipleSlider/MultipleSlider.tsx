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
        <div>
            <button><img src={nextArrow} /></button>
        </div>
    ),
    prevArrow: (
        <div>
            <button><img src={prevArrow} /></button>
        </div>
    )
  }

  return (
    <>
    <p className='MultipleSlider__info'><span></span><p>Новинки!</p><span></span></p>
    <div className="multiple-slider__wrapper">
      <Slider {...settingMultSlider}>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={one} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">123</p>
        </div>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={two} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">235453</p>
        </div>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={three} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">345345</p>
        </div>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={four} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">456456</p>
        </div>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={five} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">56443</p>
        </div>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={six} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">34556</p>
        </div>
        <div className='multiple-slider__item'>
          <Link className='multiple-slider__link' to='/'>
            <img className='multiple-slider__img'  src={three} alt='je;;p' />
            <p className='multiple-slider__desc'>Шапка синяя, с подворотом</p>
          </Link>
          <p className="multiple-slider__price">565673</p>
        </div>
      </Slider>
    </div>
    </>
    
    )
}


export {MultipleSlider}
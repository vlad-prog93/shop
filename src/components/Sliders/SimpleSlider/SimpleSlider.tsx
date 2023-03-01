// node_modules
import Slider from "react-slick";
import { Link } from "react-router-dom";

// components

// styles
import './SimpleSlider.css';


// images
import one from '../../../images/1.jpg';
import two from '../../../images/2.jpg';
import three from '../../../images/3.jpg';
import nextArrow from '../../../images/arrow-next.svg';
import prevArrow from '../../../images/arrow-prev.svg';


const SimpleSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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


    };
    return (
        <div className='slider__wrapper'>
            <Slider {...settings}>
                <div className='slick__slide'>
                    <Link to='/caps' className='slick__slide_link'>
                        <h2><span></span><b>Подростковые шапки</b><span></span></h2>
                    </Link>
                    <img src={one} alt="one" />
                </div>
                <div className='slick__slide'>
                    <Link to='/bandages' className='slick__slide_link'>
                        <h2><span></span><b>Женские шапки</b><span></span></h2>
                    </Link>
                    <img src={two} alt="two" />
                </div>
                <div className='slick__slide'>
                    <Link to='/bandages' className='slick__slide_link'>
                        <h2><span></span><b>Повязки</b><span></span></h2>
                    </Link>
                    <img src={three} alt="three" />
                </div>
            </Slider>
        </div>
    )
}

export { SimpleSlider }
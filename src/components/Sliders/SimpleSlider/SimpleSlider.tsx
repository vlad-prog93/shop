// node_modules
import Slider from "react-slick";
import { Link } from "react-router-dom";

// components

// styles
import styles from './SimpleSlider.module.scss';

// images
import one from '../../../images/1.jpg';
import two from '../../../images/2.jpg';

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        accessibility: false,
        autoplay: false,
        nextArrow: (
            <div>
                <div className={styles.slider__next_arrow}> ⫸ </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className={styles.slider__prev_arrow}> ⫷ </div>
            </div>
        )
    };
    return (
        <div className={styles.slider__wrapper}>
            <Slider {...settings}>
                <div className={styles.slick__slide}>
                    <Link to='/caps' className={styles.slick__slide_link}>
                        <h2 className={styles.slick__slide_title}><span />Шапки<span /></h2>
                        <img className={styles.slick__slide_img} src={one} alt='шапки' />
                    </Link>
                </div>
                <div className={styles.slick__slide}>
                    <Link to='/caps' className={styles.slick__slide_link}>
                        <h2 className={styles.slick__slide_title}><span />Повязки<span /></h2>
                        <img className={styles.slick__slide_img} src={two} alt='Повязки' />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export { SimpleSlider }
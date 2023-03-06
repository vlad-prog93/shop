//node_modules
import { Link } from 'react-router-dom';

//styles
import styles from './Intro.module.scss';

//images
import one from '../../images/order.jpg';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <ul className={styles.intro__list}>
        <li className={styles.intro__item}>
          <div className={styles.intro__img_container}>
            <img src={one} alt="one" />
            <Link to='/caps' />
          </div>
          <Link className={styles.intro__link} to='/caps'>Как заказать</Link>
        </li>
        <li className={styles.intro__item}>
          <div className={styles.intro__img_container}>
            <img src={one} alt="one" />
            <Link to='/caps' />
          </div>
          <Link className={styles.intro__link} to='/caps'>Как заказать</Link>
        </li>
        <li className={styles.intro__item}>
          <div className={styles.intro__img_container}>
            <img src={one} alt="one" />
            <Link to='/caps' />
          </div>
          <Link className={styles.intro__link} to='/caps'>Как заказать</Link>
        </li>

      </ul>
    </section>
  )
}

export { Intro }
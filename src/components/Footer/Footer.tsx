// node_modules

// components


// UI
import { Container } from '../../UI/Container';

// styles
import styles from './Footer.module.scss';

// images
import whatsapp from '../../images/socialWeb/whatsapp.svg'
import telegram from '../../images/socialWeb/telegram.svg'
import instagram from '../../images/socialWeb/instagram.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__item}>
                        <h4 className={styles.footer__title}>Поиск</h4>
                        <input className={styles.footer__search} type="text" placeholder='Найти...' />
                    </li>
                    <li className={styles.footer__item}>
                        <h4 className={styles.footer__title}>Контакты</h4>
                        <a href="tel:+79775917012" className={styles.footer__link}>+7 977 591 70 12</a>
                        <a href="/whatsupp" className={styles.footer__link}>Наш WhatsApp</a>
                        <a href="mailto:vladka_@bk.ru" className={styles.footer__link}>vladka_@bk.ru</a>
                    </li>
                    <li className={styles.footer__item}>
                        <h4 className={styles.footer__title}>Режим работы</h4>
                        <span className={styles.footer__text}>Без перерывов и выходных</span>
                    </li>
                    <li className={styles.footer__item}>
                        <h4 className={styles.footer__title}>Наш адрес</h4>
                        <span className={styles.footer__text}>г. Усть-Джегута, Карачаево-Черкесская республика</span>
                    </li>
                    <li className={styles.footer__item}>
                        <h4 className={styles.footer__title}>Принимаем</h4>
                        <div className={styles.footer__block}>
                            <span className={styles.footer__text}>+</span>
                            <span className={styles.footer__text}>-</span>
                        </div>

                    </li>
                    <li className={styles.footer__item}>
                        <h4 className={styles.footer__title}>Присоединяйтесь</h4>
                        <ul className={styles.social__list}>
                            <li className={styles.social__item}>
                                <a href="/" className={styles.social__link}>
                                    <img className={styles.footer__icon} src={whatsapp} />
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <a href="/" className={styles.social__link}>
                                    <img className={styles.footer__icon} src={telegram} />
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <a href="/" className={styles.social__link}>
                                    <img className={styles.footer__icon} src={instagram} />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Container>
            <p className={styles.footer__copyright}>c 2023 Copyright Adora</p>
        </footer>
    )
}

export { Footer }
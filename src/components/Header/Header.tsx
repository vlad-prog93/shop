// node_modules
import { NavLink } from 'react-router-dom'

// UI
import { MyLink } from '../../UI/MyLink'
import { Container } from '../../UI/Container'

// styles
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
            <nav className={styles.nav}>
                <NavLink className={styles.nav__link} to='/'>adora</NavLink>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <MyLink to='/caps' text='шапки' />
                    </li>
                    <li className={styles.nav__item}>
                        <MyLink to='/bandages' text='повязки' />
                    </li>
                    <li className={styles.nav__item}>
                        <MyLink to='/production-time' text='срок изготовления' />
                    </li>
                    <li className={styles.nav__item}>
                        <MyLink to='/how-to-order' text='как заказать' />
                    </li>
                    <li className={styles.nav__item}>
                        <MyLink to='/warranty' text='гарантия' />
                    </li>
                    <li className={styles.nav__item}>
                        <MyLink to='/questions' text='вопросы' />
                    </li>
                    <li className={styles.nav__item}>
                        <MyLink to='/contacts' text='контакты' />
                    </li>
                </ul>
            </nav>
            </Container>
        </header>
    )
}

export { Header }

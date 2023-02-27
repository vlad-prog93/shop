// node_modules
import { MyLink } from '../../UI/MyLink'

// UI
import { NavLink } from 'react-router-dom'

// styles
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink className={styles.nav__link} to='/'>adora</NavLink>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <MyLink to='/caps' text='Шапки'></MyLink>
                        <MyLink to='/caps' text='Шапки'></MyLink>
                        <MyLink to='/caps' text='Шапки'></MyLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }

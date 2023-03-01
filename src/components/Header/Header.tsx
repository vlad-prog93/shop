// node_modules
import { NavLink } from 'react-router-dom'

// UI
import { MyLink } from '../../UI/MyLink'
import { Container } from '../../UI/Container'

// styles
import styles from './Header.module.scss'
import { useState } from 'react'
import { BurgerButton } from '../../UI/BurgerButton'

const Header = () => {
    const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false)

    return (
        <header className={styles.header}>
            <Container>
            <nav className={styles.nav}>
                <NavLink className={styles.nav__link} to='/'>adora</NavLink>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <MyLink to='/' text='главная' />
                    </li>
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
                <BurgerButton 
                isBurgerActive={isBurgerActive} 
                setIsBurgerActive={setIsBurgerActive}
                />
            </nav>
            </Container>
        </header>
    )
}

export { Header }

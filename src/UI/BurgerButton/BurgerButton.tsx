// node_modules

// styles 
import styles from './BurgerButton.module.scss';

interface IBurgerButton {
    isBurgerActive: boolean,
    setIsBurgerActive: (isBurgerActive: boolean) => void
}

const BurgerButton = ({ isBurgerActive, setIsBurgerActive }: IBurgerButton) => {
    return (
        <div
            onClick={() => setIsBurgerActive(!isBurgerActive)}
            className={isBurgerActive
                ? styles.burger__menu + ' ' + styles.burger__menu_active
                : styles.burger__menu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export { BurgerButton }

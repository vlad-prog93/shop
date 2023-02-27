// node_modules
import { NavLink } from "react-router-dom";

// styles 
import styles from './MyLink.module.scss';


const MyLink = ({ to, text }: { to: string, text: string }) => {
    return (
        <NavLink
            className={({ isActive }) => isActive ? styles.navlink_active : styles.navlink}
            to={to}>
            {text}
        </NavLink>
    )
}

export { MyLink }

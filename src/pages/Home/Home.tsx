// node_modules

// components
import { SimpleSlider } from '../../components/Sliders/SimpleSlider';

// UI
import { Container } from '../../UI/Container';

// styles
import styles from './Home.module.scss';


const Home = () => {
    return (
        <main className={styles.home}>
            <Container>
                <SimpleSlider />
            </Container>
        </main>
    )
}

export { Home }

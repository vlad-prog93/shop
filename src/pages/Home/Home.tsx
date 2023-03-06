// node_modules

// components
import { Intro } from '../../components/Intro';
import { MultipleSlider } from '../../components/Sliders/MultipleSlider';
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
                <MultipleSlider />
                <Intro />
            </Container>
        </main>
    )
}

export { Home }

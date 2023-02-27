// node_modules
import { Routes, Route } from 'react-router-dom';

// pages
import { Home } from './pages/Home'

// components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// styles
import styles from './App.module.scss';



function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>

  );
}

export default App;

import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Header } from './components/header/header';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <p>Hello Asadsdsads</p>
                <Header />
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    The Link to React Docs{' '}
                </a>
            </header>
        </div>
    );
}

export default App;

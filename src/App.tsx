import logo from './assets/logo.svg';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <p>Hello World.</p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React Now!{' '}
                </a>
            </header>
        </div>
    );
}

export default App;

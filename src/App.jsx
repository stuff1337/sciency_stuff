import UserProvider from './components/UserProvider'
import styles from './App.module.scss'
import { CustomProvider } from 'rsuite'

const App = () => {
    return (
        <CustomProvider theme='high-contrast'>
            <div className={styles.wrapper}>
                <UserProvider />
            </div>
        </CustomProvider>
    )
}

export default App

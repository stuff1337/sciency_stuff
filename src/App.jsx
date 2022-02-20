import UserProvider from './components/UserProvider'
import styles from './App.module.scss'
import { CustomProvider } from 'rsuite'

const App = () => {

    // const [isLoading, setIsLoading] = useState(false)
    // const [user, setUser] = useState(undefined)

    // const fetchUserAxios = () => axios('https://randomuser.me/api/')
    
    // const onStartupEffect = async() => {
    //     setIsLoading(true)
    //     try {
    //         const { data } = await fetchUserAxios()
    //         setUser(data.results[0])
    //     } catch(err) {
    //         console.warn(err)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }
  
    return (
        <CustomProvider theme='high-contrast'>
            <div className={styles.wrapper}>
                <UserProvider />
            </div>
        </CustomProvider>
    )
}

export default App

import { useState, useRef } from "react"
import styles from './FirstTest.module.scss'
import { RELEVANT_STIMULAE } from "../../utils"
import SecondEvaluation from "./components/SecondEvaluation"
import FirstEvaluation from "./components/FirstEvaluation"
import Rules from './components/Rules'

const FirstTest = ({
    handleFinished
}) => {
    //да, я знаю. Но вермишелиться с роутингами было бы ещё более странным решением в таких масштабах
    //сорри
    const [isStarted, setIsStarted] = useState(false)
    const [isPreparationStarted, setIsPreparationStarted] = useState(false)
    const [isProgressFinished, setIsProgressFinished] = useState(false)
    const [isFirstEvaluationCompleted, setIsFirstEvaluationCompleted] = useState(false)
    const [currentWord, setCurrentWord] = useState('')

    const wordRef = useRef()

    const handleStarted = () => {
        setIsStarted(true)
        setIsPreparationStarted(true)
        setTimeout(() => {
            setIsPreparationStarted(false)
            startProgress()
        }, 3000)
    }

    const startProgress = () => {
        RELEVANT_STIMULAE.forEach(({ text }, index) => {
            setTimeout(() => {
                setCurrentWord(text)
                setTimeout(() => {
                    setCurrentWord('')
                    wordRef.current.style.background = 'grey'
                    setTimeout(() => {
                        wordRef.current.style.background = 'transparent'
                    })
                }, 364)
            }, 380 * index)
        })
        setTimeout(() => {
            setIsProgressFinished(true)
        }, 380 * (RELEVANT_STIMULAE.length + 1))
    }

    const handleSubmit = ({ words }) => {
        //TODO: обработка данных первой формы\
        const filteredValues = words.filter(el => el.word !== '')
        console.log(filteredValues)
        setIsFirstEvaluationCompleted(true)
    }

    if (!isStarted) return <Rules handleStarted={handleStarted}/>

    if (isFirstEvaluationCompleted) {
        return <SecondEvaluation handleFinished={handleFinished}/>
    }

    return (
        <div className={styles.content}>
            {isPreparationStarted ? (
                <span className={styles.preparation__cross}>+</span>
            ) : isProgressFinished ? (
                <FirstEvaluation handleSubmit={handleSubmit} />
            ) : (
                <span ref= {wordRef} className={styles.words}>{currentWord}</span>
            )}
        </div>
    )
}

export default FirstTest

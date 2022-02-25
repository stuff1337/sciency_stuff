import styles from '../FirstTest.module.scss'
import { RELEVANT_STIMULAE, DISTRACTIONS } from "../../../utils"
import {
    shuffle,
    chunk,
    findIndex
} from 'lodash'
import { useState } from 'react'
import {
    Button,
    Checkbox,
    Divider,
    Panel,
    Progress,
} from 'rsuite'

const getRandomPairs = () => {
    const shuffledValues = shuffle([...RELEVANT_STIMULAE, ...DISTRACTIONS])
    return chunk(shuffledValues, 2)
}

const SecondEvaluation = ({
    handleFinished,
    testResults,
}) => {
    //TODO: обработка данных второй формы (массив userSelected)
    const [testPairs] = useState(getRandomPairs)
    const [userSelected] = useState([])
    const [currentPairIndex, setCurrentPairIndex] = useState(0)
    const [currentPair, setCurrentPair] = useState(testPairs[0])

    const buttonText = currentPairIndex === testPairs.length -1 
        ? 'Завершить'
        : 'Следующая пара'

    const completionPercent = (
        (currentPairIndex + 1) / testPairs.length * 100
    ).toFixed()

    const handleNextClick = () => {
        if (currentPairIndex === testPairs.length - 1) {
            testResults.secondTestPairs = testPairs
            testResults.secondTestResults = userSelected
            handleFinished()
        }
        setCurrentPair(testPairs[currentPairIndex + 1])
        setCurrentPairIndex(currentPairIndex + 1)
    }
    
    const handleCheckbox = value => {
        const elIndex = findIndex(userSelected, value)
        if (elIndex !== -1) userSelected.splice(elIndex, 1)
        else userSelected.push(value)
    }

    return (
        <Panel bordered>
            <p>Выберите ранее продемонстрированное Вам слово.</p>
            Можно также выбрать оба или ни одного.
            <Progress.Line percent={Number(completionPercent)} strokeColor="#ffc107" />
            <Divider />
            <div className={styles.checkbox__group}>
                {currentPair.map(el => (
                    <Checkbox
                        key={el.text}
                        value={el}
                        onChange={handleCheckbox}
                    >
                        {el.text}
                    </Checkbox>
                ))}
            </div>
            <Divider />
            <Button onClick={handleNextClick}>
                {buttonText}
            </Button>
        </Panel>
    )
}

export default SecondEvaluation

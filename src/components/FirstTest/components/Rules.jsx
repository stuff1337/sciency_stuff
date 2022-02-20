import {
    Panel,
    Button,
    Divider
} from "rsuite"
import styles from '../FirstTest.module.scss'

const Rules = ({
    handleStarted
}) => {
    return (
        <div className={styles.content}>
            <Panel bordered>
                <p>Вам будут продемонстрированы <b>10 буквенных рядов из 6 букв.</b></p>
                <p>
                    Время демонстрации каждого буквенного ряда - <b>380 миллисекунд</b>
                </p>
                <p>Демонстрация будет произведена <b>один раз</b></p>
                <Divider /> 
                <b>Ваша задача - постараться запомнить как можно больше буквенных рядов.</b>
                <Divider />
                Если Вам понятны условия, нажмите кнопку "Начать". После нажатия кнопки,
                сконцентрируйтесь на крестике в центре экрана,
                через 3 секунды в этом месте начнётся демонстрация буквенных рядов.
                <Divider />
                <Button 
                    block
                    appearance="primary"
                    onClick={handleStarted}
                >
                    Начать
                </Button>
            </Panel>
        </div>
    )
}

export default Rules

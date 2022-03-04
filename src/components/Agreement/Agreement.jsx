import {
    Panel,
    Button,
    Divider
} from "rsuite"

import styles from './Agreement.module.scss'

const Agreement = ({
    handleSigned
}) => {
    return (
        <div className={styles.content}>
            <Panel header="Информированное согласие" bordered>
                <article>
                    Исследовательская группа факультета психологии Санкт-Петербургского
                    государственного университета приглашает Вас принять участие в
                    психологическом исследовании, целью которого является изучение работы
                    когнитивного бессознательного на материале буквенных рядов.
                </article>
                <Divider />
                <ul>
                    <strong>Помните, что:</strong>
                    <li>Ваше участие в исследовании исключительно добровольно.</li>
                    <li>Вы можете отказаться от участия на любом этапе.</li>
                </ul> 
                <Divider /> 
                <small>
                    Все данные, собранные в ходе исследования, будут обработаны обезличенно.
                    Участие в исследовании не предполагает получение респондентом 
                    денежной или материальной компенсации, или какой-либо другой 
                    прямой выгоды. Однако, информация, полученная в ходе этого 
                    исследования, может в будущем принести пользу и Вам, и другим людям.
                </small>
                <Divider />
                <Button  block appearance="primary" onClick={handleSigned}>Согласен</Button>
            </Panel>
        </div>
    )
}

export default Agreement
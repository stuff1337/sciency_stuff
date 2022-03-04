import {
    Panel,
    Button,
    Divider
} from "rsuite"
import {
    Formik,
    Form,
    Field,
    FieldArray
} from "formik"
import styles from '../FirstTest.module.scss'

const initialFormValues = {
    words: [
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
        { word: '', isUserSure: false },
    ]
}

const FirstEvaluation = ({
    handleSubmit
}) => {
    return (
        <Panel bordered>
            Попытайтесь записать все комбинации букв, которые Вы запомнили.
            <br/>
            Поставьте галочку, если вы <b>абсолютно уверены</b>, что помните это слово.
            <br/>
            Лишние поля оставьте пустыми.
            <Divider />
            <Formik 
                initialValues={initialFormValues}
                onSubmit={(values) => handleSubmit(values)}
                render={({ values }) => (
                    <Form className={styles.form}>
                    <FieldArray
                        name="words"
                        render={arrayHelpers => {
                            return(
                                <>
                                    <div className={styles.form__grid_container}>
                                        {values.words.map((word, index) => (
                                            <div key={index} className={styles.form__input_group}>
                                                <Field
                                                    className={styles.form__input_group__input}
                                                    value={word.word}
                                                    name={`words.${index}.word`}
                                                />
                                                <Field
                                                    className={styles.form__input_group__checkbox}
                                                    type="checkbox"
                                                    value={word.isUserSure}
                                                    checked={word.isUserSure}
                                                    name={`words.${index}.isUserSure`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        block
                                        appearance="primary"
                                        type="submit"
                                    >
                                        Больше не помню
                                    </Button>
                                </>
                            )}
                        }
                    />              
                </Form>
                )}
            />     
        </Panel>
    )
}

export default FirstEvaluation

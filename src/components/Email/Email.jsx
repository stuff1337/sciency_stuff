import { Field, Form, Formik } from "formik"
import { values } from "lodash"
import {
    Panel,
    Button,
    Divider,
} from "rsuite"
import styles from './Email.module.scss'

const Email = ({
    handleEmail,
    isEmail
}) => {

    const initialFormValues = {
        email: ''
    }

    const handleSubmit = (values) => {
        //TODO: обработка отправки мыла
        console.log(values)
        handleEmail()
    }

    return (
        <div className={styles.content}>
            <Panel header="Благодарим за участие в эксперименте!" bordered>
                {!isEmail ? (
                    <>
                        <div>
                            Можете указать свою почту в поле ниже,
                            и мы оповестим Вас о результатах эксперимента, когда он будет окончен.
                        </div>
                        <Divider />
                        <Formik
                            initialValues={initialFormValues}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            <Form className={styles.form}>
                                <Field type="email" name="email" placeholder="Email" />
                                <Button type="submit" appearance="primary">
                                    Отправить
                                </Button>
                            </Form>
                        </Formik>
                    </>
                ) : (
                    <div>
                        Мы оповестим Вас о результатах эксперимента на указанный адрес электронной почты.
                    </div>
                )}
            </Panel>
        </div>
    )
}

export default Email
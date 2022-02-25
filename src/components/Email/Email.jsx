import { Field, Form, Formik } from "formik"
import { useState } from "react"
import {
    Panel,
    Button,
    Divider,
    Loader
} from "rsuite"
import { sendEmailToDB } from "../../utils"
import styles from './Email.module.scss'

const Email = ({
    handleEmail,
    isEmail
}) => {

    const [isPending, setIsPending] = useState(false)

    const initialFormValues = {
        email: ''
    }

    const handleSubmit = (value) => {
        sendEmailToDB(value, setIsPending, handleEmail)        
    }

    if (isPending) return <Loader size="lg" backdrop center content="Отправка данных" />

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
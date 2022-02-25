import { useEffect, useState } from "react"
import { Loader } from "rsuite"
import { getUserHistory, setUserHistory } from "../../utils"
import { sendResultsToDB } from "../../utils"
import Agreement from "../Agreement"
import Email from "../Email"
import FirstTest from "../FirstTest"

const UserProvider = () => {
    //Тут лучше конечно хок было сделать, но мне лень. 
    //Вот прям написал provider и сразу почувствовал два часа дебаггинга, так что нахуй
    const { isAgreementSigned, isEmailProvided, isTestFinished } = getUserHistory()

    const [isSigned, setIsSigned] = useState(isAgreementSigned)
    const [isEmail, setIsEmail] = useState(isEmailProvided)
    const [isFinished, setIsFinished] = useState(isTestFinished)
    const [isPending, setIsPending] = useState(false)
    const [testResults] = useState({})

    const handleSigned = () => {
        setIsSigned(true)
    }

    const handleEmail = () => setIsEmail(true)

    const handleFinished = () => {
        sendResultsToDB(
            { data: JSON.stringify(testResults) },
            setIsPending,
            setIsFinished
        )
    }

    const updateHistory = () => {
        setUserHistory({
            isAgreementSigned: isSigned,
            isEmailProvided: isEmail,
            isTestFinished: isFinished, 
        })
    }

    useEffect(() => {
        updateHistory()
    }, [isSigned, isEmail, isFinished])

    if (isPending) return <Loader size="lg" backdrop center content="Отправка данных" />

    if (!isSigned) return <Agreement handleSigned={handleSigned} />

    if (isFinished) return (
        <Email
            isEmail={isEmail}
            handleEmail={handleEmail}
        />
    )

    return <FirstTest handleFinished={handleFinished} testResults={testResults}/>
}

export default UserProvider

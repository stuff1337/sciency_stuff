import { useEffect, useState } from "react"
import { getUserHistory, setUserHistory } from "../../utils"
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

    const handleSigned = () => setIsSigned(true)

    const handleEmail = () => setIsEmail(true)

    const handleFinished = () => setIsFinished(true)

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

    if (!isSigned) return <Agreement handleSigned={handleSigned} />

    if (isFinished) return (
        <Email
            isEmail={isEmail}
            handleEmail={handleEmail}
        />
    )

    return <FirstTest handleFinished={handleFinished} />
}

export default UserProvider

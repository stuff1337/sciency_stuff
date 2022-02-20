import { USER_HISTORY_FIELD, DEFAULT_LS_VALUE } from "./"

const getFromLS = (field) => JSON.parse(localStorage.getItem(field))
const setLSField = (field, value) => 
    localStorage.setItem(field, JSON.stringify(value))

export const getUserHistory = () => {
    const history = getFromLS(USER_HISTORY_FIELD)
    if (!history) {
        setLSField(USER_HISTORY_FIELD, DEFAULT_LS_VALUE)
        return DEFAULT_LS_VALUE
    }
    return history
}

export const setUserHistory = (value) => {
    setLSField(USER_HISTORY_FIELD, value)
}

// export const getIsUserAgreementSigned = () => getFromLS(USER_AGREEMENT_FIELD)
// export const getIsUserTestFinished = () => getFromLS(USER_TEST_FINISHED_FIELD)
// export const getIsUserEmailProvided = () => getFromLS(USER_EMAIL_PROVIDED)

// export const setIsUserAgreementSigned = (value) => 
//     setLSField(USER_AGREEMENT_FIELD, value)

// export const setIsUserTestFinished = (value) =>
//     setLSField(USER_TEST_FINISHED_FIELD, value)

// export const setIsUserEmailProvided = (value) =>
//     setLSField(USER_EMAIL_PROVIDED, value)

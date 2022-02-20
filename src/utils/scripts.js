import { USER_HISTORY_FIELD, DEFAULT_LS_VALUE } from "./"

const { REACT_APP_FIREBASE_KEY: API_KEY } = process.env

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

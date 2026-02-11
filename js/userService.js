'use strict'

const USER_KEY = 'userDB'
const createUser = (userData) => saveToStorage(USER_KEY, userData)

function getUser() {
    const user = loadFromStorage(USER_KEY)
    if (!user) {
        return {
            bgColor: 'rgb(151, 142, 213)',
            txtColor: 'whitesmoke'
        }
    }
    return user
}
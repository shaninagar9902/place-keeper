'use strict'

function onInit() {
    console.log('App is ready');
    applyUserPrefs()
}

function onSaveUser(ev) {
    ev.preventDefault()
    const elForm = ev.target

    const userToSave = {
        email: elForm.querySelector('.email').value,
        age: elForm.querySelector('.age').value,
        txtColor: elForm.querySelector('.txtColor').value,
        bgColor: elForm.querySelector('.bgColor').value,
        birthDate: elForm.querySelector('.birthDate').value,
        birthTime: elForm.querySelector('.birthTime').value
    }

    if (userToSave.bgColor === userToSave.txtColor) {
        alert('Please choose 2 different colors')
        return
    }

    createUser(userToSave)
    console.log('Saving user:', userToSave)
    window.location.href = 'index.html'
}

function applyUserPrefs() {
    const user = getUser()
    if (!user) return
    document.body.style.backgroundColor = user.bgColor
    document.body.style.color = user.txtColor
}
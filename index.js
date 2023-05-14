const emailRegEx = /[A-Za-z0-9_.]+@[A-Za-z0-9.-]+\.[A-Za-z]/
const firstNameAlertEl = document.getElementById('first-name-alert')
const firstNameInputEl = document.getElementById('first-name')
const lastNameAlertEl = document.getElementById('last-name-alert')
const lastNameInputEl = document.getElementById('last-name')
const emailAlertEl = document.getElementById('email-alert')
const emailInputEl = document.getElementById('email-address')
const passwordAlertEl = document.getElementById('password-alert')
const passwordInputEl = document.getElementById('password')
let formData;

function handleClick(form) {
    if (form.firstName.value.length < 1) {
        firstNameAlertEl.style.visibility = 'visible'
        firstNameAlertEl.style.padding = '0 0 10px 0'
        firstNameInputEl.style.border = '1px solid red'
        firstNameInputEl.style.backgroundImage = 'url("images/icon-error.svg")'
        firstNameInputEl.style.backgroundPositionX = '360px'
        firstNameInputEl.style.backgroundPositionY = 'center'
        firstNameInputEl.placeholder = ''
    } else {
        firstNameAlertEl.style.visibility = 'hidden'
        firstNameAlertEl.style.padding = '0'
        firstNameInputEl.style.border = '1px solid lightgrey'
        firstNameInputEl.style.backgroundImage = ''
        firstNameInputEl.placeholder = 'First Name'
    }
    if (form.lastName.value.length < 1) {
        lastNameAlertEl.style.visibility = 'visible'
        lastNameAlertEl.style.padding = '0 0 10px 0'
        lastNameInputEl.style.border = '1px solid red'
        lastNameInputEl.style.backgroundImage = 'url("images/icon-error.svg")'
        lastNameInputEl.style.backgroundPositionX = '360px'
        lastNameInputEl.style.backgroundPositionY = 'center'
        lastNameInputEl.placeholder = ''
    } else {
        lastNameAlertEl.style.visibility = 'hidden'
        lastNameAlertEl.style.padding = '0'
        lastNameInputEl.style.border = '1px solid lightgrey'
        lastNameInputEl.style.backgroundImage = ''
        lastNameInputEl.placeholder = 'Last Name'
    }
    if (!emailRegEx.test(form.emailAddress.value)) {
        emailAlertEl.style.visibility = 'visible'
        emailAlertEl.style.padding = '0 0 10px 0'
        emailInputEl.style.border = '1px solid red'
        emailInputEl.style.backgroundImage = 'url("images/icon-error.svg")'
        emailInputEl.style.backgroundPositionX = '360px'
        emailInputEl.style.backgroundPositionY = 'center'
        emailInputEl.placeholder = ''
    } else {
        emailAlertEl.style.visibility = 'hidden'
        emailAlertEl.style.padding = '0'
        emailInputEl.style.border = '1px solid lightgrey'
        emailInputEl.style.backgroundImage = ''
        emailInputEl.placeholder = 'Email Address'
    }
    if (form.password.value.length < 1) {
        passwordAlertEl.style.visibility = 'visible'
        passwordAlertEl.style.padding = '0 0 10px 0'
        passwordInputEl.style.border = '1px solid red'
        passwordInputEl.style.backgroundImage = 'url("images/icon-error.svg")'
        passwordInputEl.style.backgroundPositionX = '360px'
        passwordInputEl.style.backgroundPositionY = 'center'
        passwordInputEl.placeholder = ''
    } else {
        passwordAlertEl.style.visibility = 'hidden'
        passwordAlertEl.style.padding = '0'
        passwordInputEl.style.border = '1px solid lightgrey'
        passwordInputEl.style.backgroundImage = ''
        passwordInputEl.placeholder = 'Password'
    }
    if (form.firstName.value.length > 1
        && form.lastName.value.length > 1
        && emailRegEx.test(form.emailAddress.value)
        && form.password.value.length > 1
        ) {
            formData = {
                firstName: firstNameInputEl.value,
                lastName: lastNameInputEl.value,
                email: emailInputEl.value,
                password: passwordInputEl.value,
            }
            firstNameInputEl.value = ''
            lastNameInputEl.value = ''
            emailInputEl.value = ''
            passwordInputEl.value = ''
        }
}
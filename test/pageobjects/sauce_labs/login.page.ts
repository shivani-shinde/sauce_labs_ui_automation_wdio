class LoginPage {
    get username() {
        return $(`#user-name`)
    }

    get password() {
        return $(`#password`)
    }

    get loginButton() {
        return $(`#login-button`)
    }
    get acceptedUsernames() {
        const usernames = $(`#login_credentials`).getText()
        return usernames
    }
    get acceptedPasswords() {
        return $(`[data-test="login-password"]`)
    }
}

export default new LoginPage()
import alt from '../alt'

class User {
    constructor() {
        this.generateActions(
            'loginSuccess',
            'loginFail',
            'logoutSuccess',
        )
    }

    login() {
        $.ajax({
            url: '/user/login',
            method: 'post',
            data: JSON.stringify({
                username: 'admin',
                password: 'admin'
            }),
            contentType: 'application/json'
        }).done(data => this.loginSuccess(data))
            .fail(error => this.loginFail(error))

        return true
    }

    logout() {
        $.ajax({
            url: '/user/logout',
            method: 'post'
        }).done(() => this.logoutSuccess())

        return true
    }
}

export default alt.createActions(User)

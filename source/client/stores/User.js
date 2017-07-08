import alt from '../alt'
import {UserActions} from '../actions'

class User {
    constructor() {
        this.bindActions(UserActions)

        this.loggedInUserId = ''
        this.username = ''
        this.roles = []
    }

    onLoginSuccess(user) {
        this.loggedInUserId = user._id
        this.username = user.username
        this.roles = user.roles
    }

    onLoginFail(error) {
        console.error('Failed login attempt', error);
    }

    onLogoutSuccess() {
        this.loggedInUserId = ''
        this.username = ''
        this.roles = []
    }
}

export default alt.createStore(User)

import React, {Component} from 'react';
import {Link} from 'react-router';
import {UserStore} from '../../stores'
import {UserActions} from '../../actions'

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = UserStore.getState();

        this.onChange = this.onChange.bind(this)
    }

    onChange(state) {
        this.setState(state)
    }

    componentDidMount() {
        UserStore.listen(this.onChange)
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange)
    }

    render() {
        let userMenu;
        if (! this.state.loggedInUserId) {
            userMenu = (
                <ul className="nav navbar-nav pull-right">
                    <li>
                        <a href="#" onClick={UserActions.login} title='Click to login'>
                            Login
                        </a>
                    </li>
                    <li>
                        <Link to='/user/register'>
                            Register
                        </Link>
                    </li>
                </ul>
            );
        } else {
            userMenu = (
                <ul className="nav navbar-nav pull-right">
                    <li>
                        <Link to={`/user/profile/${this.state.loggedInUserId}`}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <a href="#" onClick={UserActions.logout} title='Click to logout'>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        }

        return (
            <div>
                {userMenu}
            </div>
        );
    }
}

export default UserMenu;

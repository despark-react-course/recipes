import React, {Component} from 'react';
import {UserStore} from '../stores'
import UserInfo from './sub-components/UserInfo'
import UserRatedMovies from './sub-components/UserRatedMovies'

class UserProfile extends Component {
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
        let nodes = {};
        nodes.roles = this.state.roles.map((role, index) => {
            return (
                <h4 className="lead" key={index}>
                    <strong>{role}</strong>
                </h4>
            );
        });

        return (
            <div>
                <UserInfo {...this.state} />

                <UserRatedMovies {...this.state} />
            </div>
        );
    }
}

export default UserProfile;

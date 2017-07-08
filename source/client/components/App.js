import React, {Component} from 'react';
import {UserStore} from '../stores'
import {UserActions} from '../actions'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = UserStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        UserStore.listen(this.onChange)
        UserActions.login()
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange)
    }

    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}

export default App;

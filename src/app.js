import React, {Component} from 'react';
//import DevTools from './utils/devtools';

export default class App extends Component {

    static path = '/';

    render() {
        return (
            <div className="container">
                { this.props.children }
            </div>
        );
    }
}

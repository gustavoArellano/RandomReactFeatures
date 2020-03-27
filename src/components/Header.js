import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h5>Code below:</h5>
            </header>
        )
    }
}

export default Header
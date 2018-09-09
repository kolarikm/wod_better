import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/signin'>Sign In</Link></li>
                    <li><Link to='/'>Landing</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/account'>Account</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
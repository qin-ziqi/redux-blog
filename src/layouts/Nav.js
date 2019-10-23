import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <Link to="home">Home</Link>
            </div>
        );
    }
}

export default Nav;

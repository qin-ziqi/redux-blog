import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Link to="home">Home</Link> <Link to="detail">Detail</Link>
            </nav>
        );
    }
}

export default Nav;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import logo from '../img/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Link to="/">
                    <img src={logo} className="Header-logo" alt="logo" />
                </Link>
                <div className="Header-right">
                    <Link to="/residents">
                        <button className="Header-button">
                            <p>RESIDENTS</p>
                        </button>
                    </Link>
                    <p className="Header-button">SCHEDULE</p>
                    <p className="Header-button">CREATE SCHEDULE</p>
                </div>
            </div>
        );
    }
}
  
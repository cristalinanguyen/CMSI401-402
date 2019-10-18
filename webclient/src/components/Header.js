import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../css/App.css';
import logo from '../img/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="Header-logo" alt="logo" />
                <div className="Header-right">
                    {/*set up router*/}
                    {/* <li><Link to="./" activeClassName="Header-button">RESIDENTS</Link></li> */}
                    {/* <a href="./" className="Header-button">SCHEDULE</a>
                    <a href="./" className="Header-button">CREATE SCHEDULE</a> */}
                    <p className="Header-button">RESIDENTS</p>
                    <p className="Header-button">SCHEDULE</p>
                    <p className="Header-button">CREATE SCHEDULE</p>
                </div>
            </div>
        );
    }
}
  
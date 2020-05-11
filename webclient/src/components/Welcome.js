import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import create from '../img/create.png';
import residents from '../img/residents.png';
import view from '../img/view.png';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="Welcome">
                    <p className="Welcome-title">Welcome to USchedule</p>
                    <div className="Welcome-body">
                        <Link to="/residents" className="Welcome-card">
                                <img src={residents} className="Welcome-img" alt="residents"></img>
                                <p>VIEW RESIDENTS</p>
                        </Link>
                        <Link to="/current-schedule" className="Welcome-card">
                            <img src={view} className="Welcome-img" alt="view"></img>
                            <p>VIEW SCHEDULE</p>
                        </Link>
                        <Link to="/create-new-schedule" className="Welcome-card">
                            <img src={create} className="Welcome-img" alt="create"></img>
                            <p>CREATE NEW SCHEDULE</p>
                        </Link>
                    </div>
                    {/* <button className="Back-to-login">GO BACK TO LOGIN PAGE</button> */}
                </div>
            </div>
        );
    }
}
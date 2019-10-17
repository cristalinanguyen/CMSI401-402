import React, { Component } from 'react';
import create from '../img/create.png';
import residents from '../img/residents.png';
import view from '../img/view.png';

export default class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <p className="Welcome-title">Welcome to USchedule</p>
                <div className="Welcome-body">
                    <button className="Welcome-card">
                        <img src={residents} className="Welcome-img" alt="residents"></img>
                        <p>VIEW ALL RESIDENTS</p>
                    </button>
                    <button className="Welcome-card">
                        <img src={view} className="Welcome-img" alt="view"></img>
                        <p>VIEW CURRENT SCHEDULE</p>
                    </button>
                    <button className="Welcome-card">
                        <img src={create} className="Welcome-img" alt="create"></img>
                        <p>CREATE NEW SCHEDULE</p>
                    </button>
                </div>
                <button className="Back-to-login">GO BACK TO LOGIN PAGE</button>
                {/* <img src={residents} alt="residents"></img>
                <img src={create} alt="create"></img>
                <img src={view} alt="view"></img> */}
            </div>
        );
    }
}
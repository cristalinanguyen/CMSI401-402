import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';

export default class CurrentSchedule extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Current Schedule</h1>
            </div>
        )
    }
}
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Welcome from './Welcome';
import Residents from './Residents';
import CurrentSchedule from './CurrentSchedule';
import CreateNewSchedule from './CreateNewSchedule';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/residents" component={Residents}></Route>
          <Route exact path="/current-schedule" component={CurrentSchedule}></Route>
          <Route exact path="/create-new-schedule" component={CreateNewSchedule}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

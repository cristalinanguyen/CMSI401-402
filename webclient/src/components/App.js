import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Welcome from './Welcome';
import Residents from './Residents';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/residents" component={Residents}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

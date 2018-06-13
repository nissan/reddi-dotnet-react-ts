import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/styles/App.css';

import logo from '../assets/images/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route match="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

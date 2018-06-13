import * as React from 'react';
import { Router } from 'react-router-dom';
import '../assets/styles/App.css';
import history from "../routing/history";
import Routes from "../routing/Routes";


class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;

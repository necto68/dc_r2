import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              DevChallenge Round 2
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Fragment>
            <Route exact path="/" component={LoginPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/user" component={UserPage} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default HomePage;

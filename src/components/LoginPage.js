import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
  render() {
    const {history} = this.props;

    return (
      <Fragment>
        <Button onClick={() => history.push('/user')} variant="raised">
          Continue as User
        </Button>
        <Button onClick={() => history.push('/admin')} variant="raised">
          Continue as Admin
        </Button>
      </Fragment>
    );
  }
}

export default withRouter(LoginPage);

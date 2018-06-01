import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import HomePage from './components/HomePage';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <HomePage />
  </MuiThemeProvider>
);

export default App;

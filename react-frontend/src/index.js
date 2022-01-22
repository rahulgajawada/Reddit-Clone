import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import RedditApp from './components/RedditApp'

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, Button, Container } from "@material-ui/core";

const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });

ReactDOM.render(
  <React.StrictMode>
            <ThemeProvider theme={themeLight}>
                <CssBaseline/>
                <RedditApp/>
            </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


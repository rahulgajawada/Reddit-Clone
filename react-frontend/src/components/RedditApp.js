import React from 'react'
import ResponsiveAppBar from './Header/AppBar'
import { spacing } from '@mui/system';

import { makeStyles } from "@material-ui/core/styles";
import PostForm from './PostForm'
import Posts from './Posts'
import Post from './Post'
import SignIn from './SignIn'
import CssBaseline from "@mui/material/CssBaseline";
import {Box, Container, ThemeProvider, createTheme, Button, Paper } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

  const useStyles = makeStyles((theme) => ({
    yellowPaper: {
      backgroundColor: "#E0E0E0"
    },
  }));

const RedditApp = () => {
    const classes = useStyles()
    return (
        <div>
                <Container className={classes.yellowPaper}>
                    <ResponsiveAppBar/>

                    <Box sx={{ m: 4 }} /> 

                    <Box>
                    <Route exact path='/createPost' component={PostForm}/>
                    <Box sx={{ m: 4 }} /> 
                    <Route exact path='/' component={Posts}/>
                    <Route exact path='/signin' component={SignIn}/>
                    </Box>

                </Container>
        </div>
    )
}

export default RedditApp
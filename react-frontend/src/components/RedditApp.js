import React from 'react'
import ResponsiveAppBar from './Header/AppBar'
import { spacing } from '@mui/system';

import { makeStyles } from "@material-ui/core/styles";
import PostForm from './PostForm'
import Post from './Post'
import CssBaseline from "@mui/material/CssBaseline";
import {Box, Container, ThemeProvider, createTheme, Button, Paper } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";

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
                    <PostForm/>
                    <Box sx={{ m: 4 }} /> 
                    <Post/>
                    </Box>

                </Container>
        </div>
    )
}

export default RedditApp
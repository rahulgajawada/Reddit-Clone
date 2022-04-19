import React from "react";
import ResponsiveAppBar from "./Header/AppBar";
import { spacing } from "@mui/system";

import { makeStyles } from "@material-ui/core/styles";
import Posts from "./Posts";
import Post from "./Post";
import SignIn from "./SignIn";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
  Button,
  Paper,
} from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { PostForm } from "./PostForm";
import CommunityPosts from "./CommunityPosts";

const useStyles = makeStyles((theme) => ({
  yellowPaper: {
    backgroundColor: "#E0E0E0",
  },
}));

const RedditApp = () => {
  const classes = useStyles();
  const newPost = {
    title: "YMCP Swipes",
    content:
      "You get 150 free ymcp swipes for a week in an attempt to inhibit the effects of climate change",
    likes: 15,
    comments: ["hi this is good"],
    user: "rohit",
  };
  return (
    <div>
      <Container className={classes.yellowPaper}>
        <ResponsiveAppBar />

        <Box sx={{ m: 4 }} />

        <Box>
          <Route exact path="/createPost" component={PostForm} />
          <Box sx={{ m: 4 }} />
          <Route exact path="/" component={Posts} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/r/:community" component={CommunityPosts} />
        </Box>
      </Container>
    </div>
  );
};

export default RedditApp;

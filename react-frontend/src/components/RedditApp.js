import React from "react";
import ResponsiveAppBar from "./Header/AppBar";
import { spacing } from "@mui/system";

import { makeStyles } from "@material-ui/core/styles";
import Posts from "./Posts";
import Post from "./Post";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ExpandedPost from "./ExpandedPost";
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
  Routes,
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
          <Routes>
          <Route exact path="/createPost" element={<PostForm/>} />
          {/* <Box sx={{ m: 4 }} /> */}
          <Route exact path="/" element={<Posts/>} />
          {
            //change route below to what reddit uses
          }
          <Route exact path="/post/:title" element={<ExpandedPost/>}></Route>{" "}
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/r/:community" element={<CommunityPosts/>} />
          </Routes>
      </Box>
      </Container>
    </div>
  );
};

export default RedditApp;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { grey } from "@material-ui/core/colors";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import ForumIcon from "@mui/icons-material/Forum";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { useLocation } from "react-router-dom";

const secondary = grey[700];

const useStyles = makeStyles({
  root: { maxWidth: "700px" },
  layout: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  sideBar: {
    width: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainBar: {
    width: "93%",
  },
  likeCount: {
    margin: "0.5px 0",
    justifyContent: "center",
    alignItems: "center",
  },
  hover: {
    "&:hover": {
      backgroundColor: "#D3D3D3",
      cursor: "pointer",
    },
  },
  commentDivider: {
    width: "600px",
    color: "gray",
    textAlign: "left",
    margin: "0 auto 0 0",
  },
});

const ExpandedPost = (props) => {
  const classes = useStyles();
  const post = useLocation().state;
  const [likes, setLikes] = useState(post && post.likes ? post.likes : 0);
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    //comment validation
    if (newComment) {
      setComments((comments) => [...comments, newComment]);
    }
  };

  useEffect(() => {
    // get request to get the posts comments

    const getComments = async () => {
      //get comments from database asynchronously https://stackoverflow.com/questions/70466407/react-fetch-data-from-database-before-rendering-component
      comments = [];
      setComments(comments);
    };
    getComments();
  }, []);

  useEffect(() => {
    console.log(likes);
    console.log("Someone has liked or disliked your post");
    //update likes in the database
  }, [likes]);

  useEffect(() => {
    console.log("A new comment has been added");
    //update comments in the database
  }, [comments]);

  return (
    <container>
      <Card className={classes.root} variant="outlined">
        <Box className={classes.layout}>
          <Box className={classes.sideBar}>
            <ArrowUpwardIcon
              className={classes.hover}
              onClick={() => setLikes(likes + 1)}
            />
            <p className={classes.likeCount}>{likes}</p>
            <ArrowDownwardIcon
              className={classes.hover}
              onClick={() => setLikes(likes - 1)}
            />
          </Box>

          <Box className={classes.mainBar}>
            <Typography
              sx={{ color: secondary }}
              variant="caption"
              gutterBottom
            >
              {post && post.user
                ? "Posted by u/{post.user}"
                : "Posted by u/unknown"}
            </Typography>
            <Typography variant="h6" mt="5px" gutterBottom>
              {post && post.title ? post.title : "nothing"}
            </Typography>
            <Typography mt="20px" variant="subtitle1" gutterBottom>
              {post && post.content ? post.content : "nothing"}
            </Typography>
            <Box
              mt="20px"
              sx={{
                display: "flex",
              }}
            >
              <CommentOutlinedIcon />
              <Typography variant="p" color={secondary} m={0.5}>
                {comments.length != 1
                  ? `${comments.length} Comments`
                  : `1 Comment`}
              </Typography>
            </Box>
            <Box mb="24px"></Box>
            <CommentForm addComment={addComment} />
            <Box mb="40px"></Box>
            <hr className={classes.commentDivider} />
          </Box>
        </Box>

        <Box className={classes.mainBar}>
          {comments.length > 0 ? (
            <Box>
              {comments.map((comment) => (
                <Comment
                  key={comment}
                  comment={{ user: "rohit", text: comment }}
                />
              ))}
              <Box mb="24px"></Box>
            </Box>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minHeight="600px"
            >
              <ForumIcon />
              <Typography variant="h5" m="12px 0">
                No Comments Yet
              </Typography>
              <Typography variant="subtitle1">
                Be the first to share what you think!
              </Typography>
            </Box>
          )}
        </Box>
      </Card>
    </container>
  );
};

export default ExpandedPost;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {},
  post: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  likes: {
    width: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  likeCount: {
    margin: "0.5px 0",
    justifyContent: "center",
    alignItems: "center",
  },
  postInfo: {
    width: "90%",
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const [likes, setLikes] = useState(post.likes);

  return (
    <container>
      <Card className={classes.root} variant="outlined">
        <Box className={classes.post}>
          <Box className={classes.likes}>
            <ArrowUpwardIcon onClick={() => setLikes(likes + 1)} />
            <p className={classes.likeCount}>{likes}</p>
            <ArrowDownwardIcon onClick={() => setLikes(likes - 1)} />
          </Box>

          <Box className={classes.postInfo}>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {post.content}
            </Typography>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <ChatBubbleOutlineIcon />
              <Typography variant="p" color="grey" m={0.5}>
                {post.comments.length > 1
                  ? `${post.comment.length} Comments`
                  : `1 Comment`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </container>
  );
};

export default Post;

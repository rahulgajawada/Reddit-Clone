import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  root: {},
  likes: { width: 10% },
  likeCount: {
    margin: "0.5px 0",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Post = (props) => {
  const classes = useStyles();
  const [likes, setLikes] = useState(props.likes);

  return (
    <Card className={classes.root} variant="outlined">
      <Box className={classes.likes}>
        <ArrowUpwardIcon onClick={() => setLikes(likes + 1)} />
        <p className={classes.likeCount}>{likes}</p>
        <ArrowDownwardIcon onClick={() => setLikes(likes - 1)} />
      </Box>
    </Card>
  );
};

export default Post;

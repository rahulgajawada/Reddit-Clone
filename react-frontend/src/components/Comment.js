import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { createTheme, flexbox } from "@mui/system";
import Collapse from "@mui/material/Collapse";
import ReplyInput from "./ReplyInput";

const useStyles = makeStyles({
  comment: {
    display: "flex",
    marginTop: "12px",
  },
  likeCount: {
    margin: "0 4px",
  },
  hover: {
    "&:hover": {
      backgroundColor: "#D3D3D3",
      cursor: "pointer",
    },
  },
});

function Comment(props) {
  const classes = useStyles();
  const comment = props.comment;
  const [likes, setLikes] = useState(comment.likes || 0);
  const [ShowReply, setShowReply] = useState(false);

  //code for subcomments
  // const subComments = comment.comments || [];

  const addReply = (newReply) => {
    console.log(newReply);
    //add reply to the current comment and update the database
  };

  return (
    <div>
      <Box className={classes.comment} mt={"24px"}>
        <Avatar sx={{ width: 24, height: 24 }}>
          {comment.user[0].toUpperCase()}
        </Avatar>
        <Box sx={{ ml: "6px", width: "100%" }}>
          <Typography variant="caption" gutterBottom>
            {comment.user}
          </Typography>
          <Box sx={{ m: "12px 0" }}></Box>
          <Typography variant="body2" gutterBottom>
            {comment.text}
          </Typography>
          <Box marginTop="8px" mx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <Box
              className={classes.hover}
              ml="16px"
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => setShowReply(!ShowReply)}
            >
              <ChatBubbleOutlineIcon sx={{}} />
              <Typography variant={"overline"} sx={{ ml: "4px" }}>
                Reply
              </Typography>
            </Box>
          </Box>
          <Collapse sx={{ mt: "12px" }} in={ShowReply}>
            <ReplyInput addReply={addReply} />
          </Collapse>
        </Box>
      </Box>

      {
        //code for subComments
        // <div className="subcomments" style={{ paddingLeft: "2em" }}>
        //   {subComments.map((comment) => (
        //     <Comment comment={comment} />
        //   ))}
        //  </div>
      }
    </div>
  );
}

export default Comment;

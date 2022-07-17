import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import ExpandedPost from "./ExpandedPost";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "&:hover": {
      border: "solid 1px darkgray",
      cursor: "pointer",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = ({title, content, community, username}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let communityURL = `/r/${community}`
  return (
  <Link to= {`/post/${title}`} state={{title, content, community, user:username}} style={{ textDecoration: "none" }}>
  <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <ArrowUpwardIcon/>
        <ArrowDownwardIcon/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <Link to={communityURL}>{"r/" + community}</Link> 
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Posted by u/{username}     one month ago
        </Typography>
        <Typography variant="h5" component="h2">
        {title}
        </Typography>
        <Typography variant="body2" component="h2">
        {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" startIcon={<CommentOutlinedIcon/>}>853 Comments</Button>
      </CardActions>
    </Card>
        <br></br>
  </div>
    </Link>
  );
}

export default Post;

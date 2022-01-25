import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {IconButton} from '@mui/material'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 const Post = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <ArrowUpwardIcon/>
        <ArrowDownwardIcon/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Posted by u/munxer     one month ago
        </Typography>
        <Typography variant="h5" component="h2">
        Covid Testing Megathread
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" startIcon={<CommentOutlinedIcon/>}>853 Comments</Button>
      </CardActions>
    </Card>
  );
}

export default Post
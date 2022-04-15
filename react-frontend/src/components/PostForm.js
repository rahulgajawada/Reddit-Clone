import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper, TextareaAutosize, Button } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PollIcon from "@mui/icons-material/Poll";
import NotesIcon from "@mui/icons-material/Notes";
import CommunityBar from "./CommunityBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useEffect } from "react";

const { gql, useQuery, useMutation } = require("@apollo/client");

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      content
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

const PostForm = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const createPostOnClick = () => {
    createPost({ variables: { content, title } });
    console.log("bruh");
    console.log(content, title);
  };
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <Box sx={{ width: 1 / 3 }}>
        <CommunityBar />
      </Box>

      <Box
        sx={{
          bgcolor: "background.paper",
          width: 700,
          position: "relative",
          minHeight: 200,
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={2}
            placeholder="Title"
            style={{ width: 600 }}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Box sx={{ m: 4 }} />

          <TextareaAutosize
            aria-label="minimum height"
            minRows={9}
            placeholder="Text(optional)"
            style={{ width: 600 }}
            onChange={(e) => setContent(e.target.value)}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}></TabPanel>
        <SwipeableViews />
        <Button onClick={createPostOnClick}>Submit</Button>
      </Box>
    </div>
  );
};

export default PostForm;

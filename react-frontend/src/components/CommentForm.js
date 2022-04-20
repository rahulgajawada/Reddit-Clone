import react, { useState, useEffect } from "react";
import { TextareaAutosize } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const CommentForm = ({ addComment }) => {
  return (
    <Box sx={{ maxWidth: 600 }}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={9}
        placeholder="What are your thoughts?"
        style={{ width: "95%", fontSize: "15px", padding: "8px" }}
      />

      <Button
        sx={{
          mt: "8px",
          display: "flex",
          justifyContent: "flex-end",
        }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={(e) => {
          addComment(e.target.parentElement.childNodes[0].value);
          e.target.parentElement.childNodes[0].value = "";
        }}
      >
        Comment
      </Button>
    </Box>
  );
};

export default CommentForm;

import react, { useState, useEffect } from "react";
import { TextareaAutosize } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const replyInput = ({ addReply }) => {
  return (
    <Box sx={{ maxWidth: 600, ml: "2em" }}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={9}
        placeholder="What are your thoughts?"
        style={{ width: "95%", fontSize: "15px", padding: "8px" }}
      />

      <Button
        sx={{
          mt: "8px",
          textAlign: "right",
        }}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={(e) => {
          addReply(e.target.parentElement.childNodes[0].value);
          e.target.parentElement.childNodes[0].value = "";
        }}
      >
        Reply
      </Button>
    </Box>
  );
};

export default replyInput;

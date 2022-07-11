import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* <PermIdentityIcon /> */}
            <Box
              component="img"
              sx={{
                height: 30,
              }}
              alt="Your logo."
              src={
                "https://styles.redditmedia.com/t5_pn7ly/styles/profileIcon_yksd4elgqaz21.png?width=256&height=256&crop=256:256,smart&s=56788d3fce7aead85126ec771ed1a8cc65c2c148"
              }
            ></Box>
            little_deer
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/signin" onclick={handleClose}>
         My Stuff 
        </MenuItem>
        <MenuItem component={Link} to="/signin" onclick={handleClose}>
         User Settings
        </MenuItem>
        <MenuItem component={Link} to="/signin" onClick={handleClose}>
          Login/Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

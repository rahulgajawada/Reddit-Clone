import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Login from "./Login";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  https: return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 55,
              }}
              alt="Your logo."
              src={
                "https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
              }
            ></Box>
          </Link>
          {/* <Button 
        startIcon={<Avatar src={"https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"} />}
      >
      </Button> */}

          {/* <IconButton>
          <a href="/"  
    ><img src={"https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"}></img>hi</a>
        </IconButton> */}

          <Grid container justifyContent="flex-end">
            <IconButton href="/CreatePost">
              <AddIcon
                sx={{
                  color: "blue",
                  // backgroundColor: "blue",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            {/* <Box
              component="img"
              sx={{
                height: 30,
              }}
              alt="Your logo."
              src={
                "https://styles.redditmedia.com/t5_pn7ly/styles/profileIcon_yksd4elgqaz21.png?width=256&height=256&crop=256:256,smart&s=56788d3fce7aead85126ec771ed1a8cc65c2c148"
              }
            ></Box>
            little_deer */}
            <Login />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

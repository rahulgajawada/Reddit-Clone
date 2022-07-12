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
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const { gql, useQuery } = require('@apollo/client')

const LOGIN_USER = gql`
query GetLoginUser {
  getLoginUser {
    name
  }
}
`

const ResponsiveAppBar = () => {
  let navigate = useNavigate()
  const {loading, error, data} = useQuery(LOGIN_USER)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUsername] = useState(undefined)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    useEffect(() => {
        if(data){
            setUsername("u/" + data.getLoginUser.name)
        }
    }, [data])

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


          <Grid container justifyContent="flex-end">
            {username != undefined? 
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
            <Login username={username} setUsername={setUsername}/>
            </Grid>
            :
            <div>
            <Button variant="outlined" sx={ { borderRadius: 28, textTransform: 'none' } } onClick={() => navigate('../signin')}>Log In</Button>
            <Button variant="contained" sx={ { borderRadius: 28, textTransform: 'none' } } onClick={() => navigate('../signup')}>Sign Up</Button>
            </div>
              }
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

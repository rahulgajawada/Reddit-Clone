import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <PermIdentityIcon/>
            <KeyboardArrowDownIcon/>
        </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component={Link} to="/signin" onclick={handleClose}>profile</MenuItem>
        <MenuItem component={Link} to="/signin" onclick={handleClose}>my account</MenuItem>
        <MenuItem component={Link} to="/signin" onClick={handleClose}>Login/Logout</MenuItem>
      </Menu>
    </div>
  );
}

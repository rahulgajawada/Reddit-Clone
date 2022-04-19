import * as React from 'react';
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {setCommunity} from './PostForm'

const { gql, useQuery } = require('@apollo/client')

const GET_COMMUNITIES = gql`
    query {
        allCommunities{
          name
        }
  }
  `
export default function CommunityBar() {
  const [communities, setCommunities] = useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (name) => {
    setCommunity(name)
    setAnchorEl(null);
  };
  const {loading, error, data} = useQuery(GET_COMMUNITIES)
  let x = []
  if(data){
      x = [...data.allCommunities]
  }
  useEffect(() => {
      if(data){
          setCommunities(x)
      }
  }, data)

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      Choose a Community
      </Button>

      <Box sx={{ m: 4 }} /> 

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {communities.map(({name}) => 
          <MenuItem onClick={() => handleClose(name)}>{name}</MenuItem>
        )}
      </Menu>
    </div>
  );
}
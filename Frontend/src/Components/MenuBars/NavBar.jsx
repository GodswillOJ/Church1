import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function MyNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" onClick={handleClick}>About</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/about/our-mission" onClick={handleClose}>Our Mission</MenuItem>
          <MenuItem component={Link} to="/about/our-vision" onClick={handleClose}>Our Vision</MenuItem>
          <MenuItem component={Link} to="/about/our-hope" onClick={handleClose}>Our Hope</MenuItem>
        </Menu>
        <Button color="inherit" onClick={handleClick}>Media</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/media/online-store" onClick={handleClose}>Online Store</MenuItem>
          <MenuItem component={Link} to="/media/live-tv" onClick={handleClose}>Live TV</MenuItem>
          <MenuItem component={Link} to="/media/e-books" onClick={handleClose}>E-Books</MenuItem>
        </Menu>
        <Button color="inherit" onClick={handleClick}>Contact Us</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/contact-us/our-location" onClick={handleClose}>Our Location</MenuItem>
          <MenuItem component={Link} to="/contact-us/new-christian" onClick={handleClose}>New Christian</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/give">Give</Button>
      </Toolbar>
    </AppBar>
  );
}

export default MyNavBar;

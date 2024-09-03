import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function MyNavBar() {
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [mediaAnchorEl, setMediaAnchorEl] = useState(null);
  const [contactAnchorEl, setContactAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:760px)');

  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleMediaClick = (event) => {
    setMediaAnchorEl(event.currentTarget);
  };

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAboutAnchorEl(null);
    setMediaAnchorEl(null);
    setContactAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleAboutClick}>
          <ListItemText primary="About" />
        </ListItem>
        <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/about/our-mission" onClick={handleClose}>Our Mission</MenuItem>
          <MenuItem component={Link} to="/about/our-vision" onClick={handleClose}>Our Vision</MenuItem>
          <MenuItem component={Link} to="/about/our-hope" onClick={handleClose}>Our Hope</MenuItem>
        </Menu>

        <ListItem button onClick={handleMediaClick}>
          <ListItemText primary="Media" />
        </ListItem>
        <Menu anchorEl={mediaAnchorEl} open={Boolean(mediaAnchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/media/online-store" onClick={handleClose}>Online Store</MenuItem>
          <MenuItem component={Link} to="/media/live-tv" onClick={handleClose}>Live TV</MenuItem>
          <MenuItem component={Link} to="/media/e-books" onClick={handleClose}>E-Books</MenuItem>
        </Menu>

        <ListItem button onClick={handleContactClick}>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <Menu anchorEl={contactAnchorEl} open={Boolean(contactAnchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/contact-us/our-location" onClick={handleClose}>Our Location</MenuItem>
          <MenuItem component={Link} to="/contact-us/new-christian" onClick={handleClose}>New Christian</MenuItem>
        </Menu>

        <ListItem button component={Link} to="/give">
          <ListItemText primary="Give" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        <Typography variant='body1' sx={{ fontStyle: 'italic', fontSize: isMobile ? '16px' : '18px' }}>
          GOtech_church
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList()}
            </Drawer>
          </>
        ) : (
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>

            <Button color="inherit" onClick={handleAboutClick}>About</Button>
            <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleClose}>
              <MenuItem component={Link} to="/about/our-mission" onClick={handleClose}>Our Mission</MenuItem>
              <MenuItem component={Link} to="/about/our-vision" onClick={handleClose}>Our Vision</MenuItem>
              <MenuItem component={Link} to="/about/our-hope" onClick={handleClose}>Our Hope</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleMediaClick}>Media</Button>
            <Menu anchorEl={mediaAnchorEl} open={Boolean(mediaAnchorEl)} onClose={handleClose}>
              <MenuItem component={Link} to="/media/online-store" onClick={handleClose}>Online Store</MenuItem>
              <MenuItem component={Link} to="/media/live-tv" onClick={handleClose}>Live TV</MenuItem>
              <MenuItem component={Link} to="/media/e-books" onClick={handleClose}>E-Books</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleContactClick}>Contact Us</Button>
            <Menu anchorEl={contactAnchorEl} open={Boolean(contactAnchorEl)} onClose={handleClose}>
              <MenuItem component={Link} to="/contact-us/our-location" onClick={handleClose}>Our Location</MenuItem>
              <MenuItem component={Link} to="/contact-us/new-christian" onClick={handleClose}>New Christian</MenuItem>
            </Menu>

            <Button color="inherit" component={Link} to="/give">Give</Button>
          </Toolbar>
        )}
      </Box>
    </AppBar>
  );
}

export default MyNavBar;

import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, IconButton, Link } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import worship from '../Assets/home_images/worship.jpg';


const Footer = () => {
const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box style={{ position: 'relative', width: '100%' }}>
        {/* box image */}
    <Box
        component="img"
        alt="backgroundImg"
        src={worship}
        width="100%"
        height="15rem"
        position= 'absolute'
        // bottom= '0'
        sx={{ objectFit: "cover", mb: '0', overflowX: '0' }}
    />

    {/* Footer Box container */}
    <Box 
        sx={{ 
            position: 'relative', 
            // bottom: 0, 
            left: 0,
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            padding: '0 40px 0 40px',
            alignItems: 'center',
            justifyContent: isSmallScreen ? 'center' : 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            color: 'dark',
            height: '240px',
        }}
    >
        <>
          <Box sx={{ 
            padding: isSmallScreen ? '0 0 0 10px' : '0 0 0 0',
          }}>
            <Typography
            sx={{
              color:'#fff !important',
              fontFamily: "Pacifico, cursive",
              fontSize: isSmallScreen ? '18px' : '25px',
              fontWeight: '400',
              justifyContent: "right gap={2}",
              fontStyle: 'normal', 
            }}
            >
              GoTECH_EDU
            </Typography>
            <Typography
            sx={{
              color:'#fff !important',
              fontFamily: "Quicksand",
              fontWeight: '400',
              justifyContent: "right gap={2}",
              fontStyle: 'normal', 
            }}
            >
              Your excellence education is guaranteed.
            </Typography>
            <Typography
            sx={{
              color:'#fff !important',
              fontFamily: "Edu AU VIC WA NT Hand, cursive",
              fontWeight: '400',
              justifyContent: "right gap={2}",
              fontStyle: 'normal', 
            }}
            >
              Address: No 47 Ajah Lekki Lagos Nigeria
            </Typography>
          </Box>
        </>

        <div 
          style={{
            justifyContent: isSmallScreen ? "left": "right",
            paddingRight: isSmallScreen ? '60px' : '0',
          }}
        >

        <Box mt={2} sx={{
          display: 'flex',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          borderRadius: '5px',
          boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
          justifyContent: 'space-between',
          }}>
          <Typography variant="body2" padding='10px' color="white">
              &copy; mail us.
          </Typography>

          <input type='button' value='email us' style={{
            background: '#4c4c79',
            color: 'white',
            width: '60px',
            border: 'none',
            padding: '5px',
            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
          }}/>
        </Box>

          <Box display="flex" 
          gap={2}>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: "primary.main" }}>
                  <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" sx={{ color: "primary.main" }}>
                  <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: "primary.main" }}>
                  <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "primary.main" }}>
                  <LinkedIn />
              </IconButton>
          </Box>
          <Box mt={2} sx={{textAlign: 'right'}}>
              <Typography variant="body2" color="white">
                  &copy; 2024, Developer Godswill Ogono
              </Typography>
          </Box>
        </div>
    </Box>
</Box>
  )
}

export default Footer
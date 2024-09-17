import React from 'react';
import { Box, Typography, useMediaQuery, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import worship from '../Assets/home_images/worship.jpg';

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width:650px)');

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Background image container */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: `url(${worship})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Footer content container */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          padding: isSmallScreen ? '20px' : '40px',
          alignItems: 'center',
          justifyContent: isSmallScreen ? 'center' : 'space-between',
          gap: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          minHeight: '240px',
          zIndex: 1, // Ensures content is above background image
        }}
      >
        <Box sx={{ padding: isSmallScreen ? '0 0 0 10px' : '0' }}>
          <Typography
            sx={{
              fontFamily: "Pacifico, cursive",
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
              fontWeight: '400',
              pb: 2
            }}
          >
            GOtech_church
          </Typography>
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
              fontWeight: '400',
            }}
          >
            Hebrews 4:16 (KJV) <br />
            Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Edu AU VIC WA NT Hand, cursive",
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
              fontWeight: '400',
            }}
          >
            Address: Ajah Lekki Lagos Nigeria
          </Typography>
        </Box>

        <Box sx={{  paddingRight: isSmallScreen ? '0' : '0' }}>
          <Box mt={2} sx={{
            display: 'flex',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
            justifyContent: 'space-between',
          }}>
            <Typography sx={{
              padding: '10px',
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              color: 'white',
            }}>
              &copy; mail us.
            </Typography>
            <input
              type='button'
              value='email us'
              style={{
                background: '#4c4c79',
                color: 'white',
                width: '60px',
                border: 'none',
                padding: '5px',
                boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
              }}
            />
          </Box>

          <Box display="flex" gap={2} mt={2}>
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

          <Box mt={2} sx={{ textAlign: 'right' }}>
            <Typography sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              color: 'white',
            }}>
              &copy; 2024, Developer Godswill Ogono
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

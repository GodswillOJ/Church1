import React from 'react';
import { Box, Typography, Link, useMediaQuery } from '@mui/material';
import mission1 from '../../../Assets/home_images/gathering.jpg';
import Footer from '../../../Components/Footer';

const Mission = () => {
  const isSmallScreen = useMediaQuery('(max-width:760px)');

  return (
    <Box display="block" sx={{ margin: '10% 10% 2% 10%' }}>
      {/* Parent container that holds image and text content */}
      <Box display="block">
        
        {/* Image container with relative positioning */}
        <Box
          flex={1}
          sx={{
            position: 'relative',  // Ensures the absolutely positioned box stays within this container
            width: '100%',
            mb: '8%',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Adds a fine shadow
            height: '400px',       // You can adjust this height as needed
          }}
        >
          <Box
            component="img"
            src={mission1} // replace with your image path
            alt="Our Mission"
            sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Adds a fine shadow
            }}
          />

          <Box 
            display="flex" 
            flexDirection="column"
            sx={{
              position: 'absolute',  // Position this box on top of the image
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',  // Match the height of the image container
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',  // Center the content vertically
              backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Overlay background
              color: '#fff',
            }}
          >
            {/* First container: Heading and Join Us link */}
            <Box textAlign="center">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, // Responsive font size
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }, // Responsive font size
                }}
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
              <Link
                href="#"
                variant="body1"
                underline="hover"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }, // Responsive font size
                }}
              >
                Join Us
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Text content container */}
        <Box mt={2} sx={{ 
          background: 'linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)',  // Grayish-white gradient background
          padding: 2,  // Add padding for better spacing
          borderRadius: 2,  // Optional: rounded corners
          mb: '7%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Adds a fine shadow
        }}>
          {/* Second container with Anthem and Mission details */}
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
            {/* Anthem container */}
            <Box flex={1}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' }, // Responsive font size
                }}
              >
                To live is Christ and to die is gain
              </Typography>
            </Box>

            {/* Mission details */}
            <Box flex={1}>
              <Typography
                variant="h3"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: 1,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' }, // Responsive font size
                }}
              >
                Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }, // Responsive font size
                }}
              >
                To spread the good news of the gospel to every nation.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }, // Responsive font size
                }}
              >
                To preach the coming of Christ and His love and win souls.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }, // Responsive font size
                }}
              >
                To reach out to the needy and heavy-hearted and show kindness.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' }, // Responsive font size
                }}
              >
                By lending a hand of Christ.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Mission;

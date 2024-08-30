import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import welcome from '../../Assets/home_images/welcome.jpg';
import meet from '../../Assets/home_images/meet.jpg';
import word from '../../Assets/home_images/the_word.jpg';
import hear from '../../Assets/home_images/hear.jpg';

const Home = () => {
  const images = [welcome, meet, word];
  const alternateImage = 'url_of_alternate_image.jpg';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // 1 second for fade out before changing the image
    }, 10000); // 10 seconds for each image to stay visible

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column' }}
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      {/* First Container */}
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          height: 300,
          backgroundImage: `url(${images[currentImageIndex] || alternateImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: fade ? 1 : 0,
          transition: 'opacity 1s ease-in-out', // Smooth fade effect
        }}
      >
        {/* Add any content like text or buttons here if needed */}
      </Box>

      {/* Second Container */}
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          padding: 2,
        }}
      >
        <Box marginBottom={2}>
          <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
            Latest Word of God
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // 1 column on mobile, 2 columns on larger screens
              gap: 2, // Space between the grid items
            }}
          >
            <Box>
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundImage: `url(${hear})`, // Apply background image correctly
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
                }}
              >
                9:00am
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive font size
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>

            {/* Repeat the above Box for other items */}
            <Box>
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundImage: `url(${hear})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                9:00am
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>

            {/* Add more Boxes as needed */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Box, Link, Typography, useMediaQuery, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import welcome from '../../Assets/home_images/welcome.jpg';
import meet from '../../Assets/home_images/meet.jpg';
import word from '../../Assets/home_images/the_word.jpg';
import hear from '../../Assets/home_images/hear.jpg';
import bible2 from '../../Assets/home_images/bible2.jpg';
import faith from '../../Assets/home_images/faith.jpg';
import faith2 from '../../Assets/home_images/faith2.jpg';
import gathering from '../../Assets/home_images/gathering.jpg';
import Footer from '../../Components/Footer';

const Home = () => {
  const images = [welcome, meet, word];
  const images2 = [gathering, faith, faith2];
  const alternateImage = 'url_of_alternate_image.jpg';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const updates = [
    'Join us for prayerful services by 5:30pm',
    'Bible study every Wednesday at 7:00pm',
    'Youth choir and workers fellowship starts every Saturday at 4:00pm',
    'Sunday worship service at 10:00am',
  ];

  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0);

  const handleNext = () => {
    setCurrentUpdateIndex((prevIndex) => (prevIndex + 1) % updates.length);
  };

  const handlePrev = () => {
    setCurrentUpdateIndex((prevIndex) =>
      prevIndex === 0 ? updates.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // 1 second for fade out before changing the image
    }, 10000); // 10 seconds for each image to stay visible

    return () => clearInterval(interval);
  }, [images.length], [images2.length]);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 5000); // Adjust the interval as needed for automatic scrolling

    return () => clearInterval(autoScroll);
  }, [currentUpdateIndex]);

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
          width: { xs: '60%', md: '60%' },
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
                  backgroundImage: `url(${bible2})`, // Apply background image correctly
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
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Numquam praesentium repellendus fuga quibusdam consequatur magnam aliquid sint, alias velit nihil!
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Numquam praesentium repellendus fuga quibusdam consequatur magnam aliquid sint, alias velit nihil!
              </Typography>
            </Box>

            {/* Add more Boxes as needed */}
          </Box>
        </Box>
      </Box>

      {/* Swiper Container */}
      <Box
        sx={{
          width: { xs: '80%', md: '60%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4,
          padding: 2,
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            minHeight: '50px',
            gap: 4,
            animation: 'scroll 10s linear infinite', // Continuous scrolling animation
          }}
        >
          <Typography variant="body2"
            sx={{
              background: '#5b99c8',
              padding: '8px',
              color: '#fff',
              borderRadius: '5px 0 0 5px',
              marginRight: '8px',
            }}
          >
            Updates
          </Typography>
          <Typography variant="body2">
            {updates[currentUpdateIndex]}
          </Typography>
        </Box>
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* third container */}
      <Box
        marginBottom={2}
        sx={{
          width: { xs: '60%', md: '60%' },
          padding: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
          Work by faith
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr', // 1 column on mobile, 2 columns on larger screens
            gap: 2, // Space between the grid items
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: isSmallScreen ? 200 : 400,
              backgroundImage: `url(${images2[currentImageIndex] || alternateImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: 2,
              opacity: fade ? 1 : 0,
              transition: 'opacity 1s ease-in-out', // Smooth fade effect
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Numquam praesentium
            repellendus fuga quibusdam consequatur magnam aliquid sint, alias
            velit nihil!
          </Typography>
        </Box>
      </Box>

      <Box
      display="flex"
      flexDirection='row'
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      gap='10px'
    >
      {/* First Child Container */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginRight: { xs: 0, md: 2 }, marginBottom: { xs: 2, md: 0 } }}
      >
        {/* Outer Circle */}
        <Box
          sx={{
            width: isSmallScreen ? 50 : 100,
            height: isSmallScreen ? 50 : 100,
            backgroundColor: '#3ba2a3a8',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Inner Circle with Cross */}
          <Box
            sx={{
              width: isSmallScreen ? 30 : 60,
              height: isSmallScreen ? 30 : 60,
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
          {/* Golden Blue Cross */}
          <Box
            sx={{
              width: isSmallScreen ? 15 : 30,  // Adjust width for small screens
              height: isSmallScreen ? 15 : 30, // Adjust height for small screens
              backgroundColor: 'transparent',
              position: 'relative',
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: isSmallScreen ? 4 : 8,  // Adjust cross width for small screens
                height: isSmallScreen ? 15 : 30, // Adjust cross height for small screens
                backgroundColor: '#8b260f',
              },
              '::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: isSmallScreen ? 15 : 30, // Adjust cross width for small screens
                height: isSmallScreen ? 4 : 8,  // Adjust cross height for small screens
                backgroundColor: '#8b260f',
              },
            }}
          />

          </Box>
        </Box>
      </Box>

      {/* Second Child Container */}
      <Box>
        <Typography variant="body1"
        sx={{
          fontSize: isSmallScreen ? '10px' : '16px',
          fontStyle: 'italic'
        }}
        >
          Join us in prayers.
        </Typography>
        <Link to=''>prayers</Link>
      </Box>
    </Box>

      <Footer />
    </Box>
  );
};

export default Home;

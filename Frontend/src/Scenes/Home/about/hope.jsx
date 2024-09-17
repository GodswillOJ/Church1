import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import cross1 from '../../../Assets/home_images/cross1.jpg';
import Footer from '../../../Components/Footer';

const hopeTexts = [
  "Romans 15:13 - May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
  "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
  "Psalm 39:7 - But now, Lord, what do I look for? My hope is in you.",
  "1 Peter 1:3 - Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead."
];

const citiesData = {
  Lagos: { time: '8:00 PM', text: 'Get in touch with the word of God' },
  'Port Harcourt': { time: '8:30 PM', text: 'Get in touch with God' },
  Delta: { time: '9:00 PM', text: 'Receive blessings from above' },
  Abuja: { time: '9:30 PM', text: 'Experience divine grace' },
  'Facebook Live': { time: '10:00 PM', text: 'Join us for live prayers' },
};

const Hope = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:760px)');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % hopeTexts.length);
        setFade(true);
      }, 500); // Duration of fade out
    }, 5000); // Duration of each text display

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <Box display="block" sx={{ margin: '10% 10% 2% 10%' }}>
      <Box display="block">
        <Box
          flex={1}
          sx={{
            position: 'relative',
            width: '100%',
            mb: '8%',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            height: '400px',
          }}
        >
          <Box
            component="img"
            src={cross1}
            alt="Our Mission"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
            }}
          >
            <Box textAlign="center">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                }}
              >
                Our Hope
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
                  padding: '20px',
                  margin: '5%',
                  borderRadius: '5px',
                  border: '2px solid white',
                  opacity: fade ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              >
                {hopeTexts[currentTextIndex]}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Keep track section with buttons */}
        <Box textAlign="center" mt={4} mb={4}
          sx={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '10px 10px 20px 10px'
          }}
        >
          <Typography variant="h4" mb={2}>
            Keep Track
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} mb={3}>
            {Object.keys(citiesData).map((city) => (
              <Button
                key={city}
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(city)}
              >
                {city}
              </Button>
            ))}
          </Box>

          {/* Display selected city's data */}
          {selectedCity && (
            <Box
              mt={4}
              p={3}
              sx={{
                backgroundColor: '#f0f4f7', // Light background color
                border: '2px solid #007bff', // Blue border color
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h6" sx={{ color: '#007bff' }}>
                {selectedCity} TV
              </Typography>
              <Typography variant="body1">
                View at: {citiesData[selectedCity].time}
              </Typography>
              <Typography variant="body1">
                {citiesData[selectedCity].text}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Hope;

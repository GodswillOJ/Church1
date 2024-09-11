import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, IconButton, Link } from '@mui/material';
import gather from '../../../Assets/home_images/gather.jpg';
import cross2 from '../../../Assets/home_images/cross2.jpg';
import Footer from '../../../Components/Footer';

const Vision = () => {
const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
        sx={{
            display: 'block'
        }}
    >
        <Box style={{ position: 'relative', width: '100%', margin: '10% auto',  }}>
            {/* box 1 */}
            <div
                style={{
                    position: 'relative', // Make the parent div the reference for absolute positioning
                    margin: 10,
                }}
            >
                <Box
                    component="img"
                    alt="backgroundImg"
                    src={gather}
                    width="100%"
                    sx={{ 
                        objectFit: "cover", 
                        height: isSmallScreen ? "20rem" : "20rem", 
                        mb: 0,
                        overflowX: 'hidden',
                    }}
                />

                {/* Footer Box container */}
                <Box 
                    sx={{ 
                        position: 'absolute', // Position this box on top of the image
                        bottom: 0, // Stick the footer to the bottom of the container
                        left: 0,
                        width: '100%', // Make sure it spans the entire width of the container
                        display: 'block',
                        alignItems: 'center',
                        justifyContent: isSmallScreen ? 'center' : 'space-between',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        color: '#fff',
                        height: '320px',
                    }}
                >
                    <Box sx={{ 
                        padding: isSmallScreen ? '10px' : '20px',
                    }}>
                        <Typography
                            variant='h2'
                            sx={{
                                color:'#fff !important',
                                fontFamily: "Pacifico, cursive",
                                fontSize: isSmallScreen ? '30px' : '50px',
                                fontWeight: '400',
                                justifyContent: "right gap={2}",
                                fontStyle: 'normal', 
                            }}
                        >
                            Our Vision
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
                            Our vision is to make heaven, to take many people along with us to make heaven, 
                            to achieve this by living in righteousness, obeying God's word, 
                            sharing the gospel and ultimately wining a soul.
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
                            We are soldiers for Christ. 2 Timothy 2:3-19.
                        </Typography>
                    </Box>
                </Box>
            </div>

            {/* Box 2 */}
            <div
                style={{
                position: 'relative', // Make the parent div the reference for absolute positioning
                margin: 10,
            }}   
            >
                <Box
                    component="img"
                    alt="backgroundImg"
                    src={cross2}
                    width="100%"
                    // bottom= '0'
                    sx={{ objectFit: "cover", height: isSmallScreen ? "20rem" : "20rem",  mb: '0', overflowX: 'hidden' }}
                />

                {/* Footer Box container */}
                <Box 
                    sx={{ 
                        position: 'absolute', // Position this box on top of the image
                        bottom: 0, // Stick the footer to the bottom of the container
                        left: 0,
                        width: '100%', // Make sure it spans the entire width of the container
                        display: 'block',
                        alignItems: 'center',
                        justifyContent: isSmallScreen ? 'center' : 'space-between',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        color: '#fff',
                        height: '320px',
                    }}
                >
                    <>
                    <Box sx={{ 
                        padding: isSmallScreen ? '10px' : '20px',
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row'
                    }}>
                        <Typography
                        sx={{
                        color:'#fff !important',
                        fontFamily: "Quicksand",
                        fontWeight: '400',
                        justifyContent: "right gap={2}",
                        fontStyle: 'normal', 
                        }}
                        >
                        Our vision is to make heaven, to take many people along with us to make heaven, 
                        to achieve this by living in righteousness, obeying God's word, 
                        sharing the gospel and ultimately wining a soul.
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
                            We are soldiers for Christ. 2 Timothy 2:3-19.
                        </Typography>
                    </Box>
                    </>
                </Box>
            </div>
        </Box>
        <Footer/>
    </Box>
  )
}

export default Vision;
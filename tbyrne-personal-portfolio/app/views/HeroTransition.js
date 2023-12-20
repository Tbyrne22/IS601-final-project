import { Container, Grid, Typography, Button } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import '../globals.css';


const backgroundImage = 'images/mountain.webp';

const transitionSection = {
    height: 288,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderTop: '16px solid black', // Black border at the top
    borderBottom: '16px solid black', // Black border at the bottom

  };


export default function HeroTransition() {
    return (
            <Box component="section" sx={{...transitionSection}}>

            </Box>
    );
  }
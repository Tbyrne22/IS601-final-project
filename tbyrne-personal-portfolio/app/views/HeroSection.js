import { Container, Grid, Typography, Button } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import '../globals.css';
import { styled } from '@mui/material/styles';


const backgroundImage = 'images/transformer.webp';

const heroSection = {
  background: 'linear-gradient(var(--background-color-secondary) 75%, white)',
  py:{xs: 8},
  position: 'relative',
  display: 'flex',
  height: 'calc(100vw/1.618)',
  minHeight: 700,
  maxHeight: 900,
  paddingY: { xs: 4, sm: 12, md: 16 },
};

const heroTextContainer = {
  marginTop: '48px',
  backgroundColor: 'var(--background-color-primary)',
  height: 300,
  borderRadius: '30px',
  padding: '16px',
};

const heroTextStyle1 = {
  color: 'var(--font-color-primary)',
};

const heroTextStyle2 = {
  color: 'var(--font-color-secondary)',
}

const heroImageStyle = {
  maxHeight: '80%', // Set a maximum height relative to the viewport
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  display: 'flex',
  alignItems: 'center',
  margin: { xs: 'auto', md: '0', right: '32px' },
  borderRadius: '30px',
};

const heroAction = {
  backgroundColor: 'var(--font-color-primary)',
  color: 'var(--font-color-secondary)',
  borderRadius: 20,
  '&:hover':{
   backgroundColor:'grey',
 },
};
const heroContain = {
  flex: 1, 
  display: 'flex', 
  height: 'auto',
};

export default function HeroSection() {
  return (
    <Box component="section" className="hero" sx={{...heroSection}}>
      <Container sx={{...heroContain}}>
        <Grid container spacing={2}>
          {/* First column */}
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column'}}>
            <Box sx={{...heroTextContainer}}>
              <Typography variant="h2" sx={{...heroTextStyle2}}>Hi, my name is</Typography>
              <Typography variant="h1" sx={{...heroTextStyle1}}>Tom Byrne</Typography>
              <Typography variant="h2" sx={{...heroTextStyle2}}>And I'm an Electrical & Computer Engineer</Typography>
              <Typography variant="h4" sx={{...heroTextStyle2}}>I Specialize in High-Voltage Electrical Equipment and Asset Strategy</Typography>
            </Box>
            <Button color='inherit' variant="contained" href="#project_section" size="large" component="a" sx={{...heroAction, minWidth: 200, mt: '18px', alignSelf: 'center'}} >
                View My Projects
            </Button>
          </Grid>
          {/* Second column */}
          <Grid item xs={12} sm={6}>
            {/* Content for the second column */}
            <Box sx={{...heroImageStyle, height: '100%', backgroundImage: `url(${backgroundImage})`}}></Box>
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
}
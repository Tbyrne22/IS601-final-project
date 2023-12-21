import { Container, Grid, Typography, Button } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import '../globals.css';
import { styled } from '@mui/material/styles';


const backgroundImage = 'images/mountain.webp';

const heroTextStyle1 = {
    color: 'var(--font-color-primary)',
};
  
const heroTextStyle2 = {
    color: 'var(--font-color-secondary)',
}

const heroContain = {
    flex: 1, 
    display: 'flex', 
    height: 'auto',
};

  

export default function AboutMeSection() {
    return (
      <Box component="section" className="hero" sx={{}}>
        <a name="contact-me"></a>
        <Container sx={{...heroContain}}>
          <Grid container spacing={4}>
            {/* First column */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column'}}>
              <Typography>About Me Section</Typography>
            </Grid>
          </Grid>
        </Container>
  
      </Box>
    );
  }
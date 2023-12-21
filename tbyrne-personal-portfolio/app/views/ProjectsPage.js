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

const mySkillsContainer = {
    backgroundColor: 'var(--background-color-secondary)',
    height: 300,
    padding: '16px',
};

const myProjectsContainer = {
  backgroundColor: 'var(--background-color-primary)',
  height: 300,
  padding: '16px',
};

const projectsSection = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  py:{xs: 8},
  position: 'relative',
  display: 'flex',
  height: 'calc(100vw/1.618)',
  minHeight: 700,
  maxHeight: 900,

  backgroundRepeat: 'no-repeat',
};
  

export default function MyProjectsPage() {
    return (
      <Box component="section" className="hero" sx={{...projectsSection}}>
        <Container sx={{...heroContain}}>
          <Grid container spacing={0} 
            sx={{ display: 'flex', flexDirection: { xs: 'row-reverse', sm: 'column', md: 'row' }}}>
            {/* First column */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column'}}>
              <Box sx={{...myProjectsContainer}}>
                <Typography variant="h2" sx={{...heroTextStyle2}}>My Projects</Typography>
              </Box>
            </Grid>
            {/* Second column */}
            <Grid item xs={12} sm={6}>
              {/* Content for the second column */}
              <Box sx={{...mySkillsContainer}}>
                <Typography variant="h2" sx={{...heroTextStyle2}}>My Skills</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }